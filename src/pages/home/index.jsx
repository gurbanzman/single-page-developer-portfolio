import { MdErrorOutline } from "react-icons/md";
import customSkillsData from "../../components/main/custom/data/skills/index";
import { useNavigate, useParams } from "react-router-dom";
import LinkOrBtn from "../../components/main/ui/button";
import CustomSkills from "../../components/main/custom/layout/skills";
import CustomProjects from "../../components/main/custom/layout/projects";
import { useQuery } from "@tanstack/react-query";
import { getAllMessages, getProject, getUser, postMessages } from "../../hooks/data";
import Navbar from "../../components/main/navbar";
import { isLoggedIn } from "../../hooks/middleware";
import { useEffect, useState } from "react";
import { customHandleChange } from "../../utils/handleChange";
import { toast } from "react-toastify";

const PORT = import.meta.env.VITE_BACKEND;
const adamkeyes = "/images/avatar/profile.png";

function HomePage() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({
    from: "",
    to: id,
    messages: "",
    email: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    } else {
      return;
    }
  }, [navigate]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await getAllMessages(id);
      setMessages(data);
    };

    fetchMessages();
  }, [id]);

  const { data: userData } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });

  const { data: projectData } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProject(),
    enabled: !!id,
  });

  const handlePostMessages = async (e) => {
    e.preventDefault();
    const newPost = await postMessages(message);
    if (newPost.status === 201) {
      toast.success("Message sent successfully!");
      setMessage({ from: "", to: id, messages: "", email: "" });
      const { data } = await getAllMessages(id);
      setMessages(data);
    } else {
      toast.error("Failed to send message!");
    }
  };

  return (
    <div className="portfolio">
      {/* navbar */}
      <div className="navbar">
        <div className="flex flex-col gap-5 items-center page-container navbar-content">
          <Navbar data={userData ? userData : null} messages={messages} />
        </div>
      </div>
      {/* main */}
      <div className="main">
        {/* user */}
        <div className="flex main-text main-bottom relative">
          <div className="main-image page-container flex justify-end items-end">
            <figure className="w-full user-profile">
              <img
                src={
                  userData ? `${PORT}/${userData.data.profileImage}` : adamkeyes
                }
                alt="profile.png"
                className="reset-image"
              />
            </figure>
          </div>
          <div className="main-user flex">
            <h1 className="main-user-title">
              Nice to meet you! I’m{" "}
              <span className="main-user-title-name border-b-3 border-lightGreen">
                {userData ? userData.data.fullName : "adamkeyes"}
              </span>
              .
            </h1>
            <p className="main-user-desc">
              {userData
                ? userData.data.description
                : "Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love."}
            </p>
            {id ? (
              ""
            ) : (
              <LinkOrBtn
                variant="link"
                link="/create-user"
                linkText="Create User"
              />
            )}
          </div>
          <div className="absolute w-9/12 max-w-[250px] top-15 z-[-1] left-0 absolute-pri-left">
            <figure>
              <img
                src={"/images/design/primary.png"}
                alt="primary.png"
                className="reset-image"
              />
            </figure>
          </div>
          <div className="absolute top-[13rem] right-0 w-16 absolute-circle z-[-1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="129"
              viewBox="0 0 64 129"
              className="reset-image"
              fill="none"
            >
              <circle cx="64.5" cy="64.5" r="64" stroke="white" />
            </svg>
          </div>
        </div>
        {/* skills */}
        <div className="skills main-bottom relative m-auto">
          <CustomSkills
            data={userData ? userData.data.skills : customSkillsData}
          />
          <div className="absolute w-9/12 max-w-[250px] z-[-1] bottom-[-5rem] right-0 absolute-pri-right">
            <figure>
              <img
                src={"/images/design/primarry-right.png"}
                alt="primaryRight.png"
                className="reset-image"
              />
            </figure>
          </div>
        </div>
        {/* projects */}
        <div className="projects main-bottom">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-bold projects-title">Projects</h1>
            {id ? (
              <p>
                <LinkOrBtn
                  variant="link"
                  link={`/added-project/${userData ? userData.data._id : id}`}
                  linkText="Added"
                />
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="projects-list-container">
            <CustomProjects data={projectData ? projectData.data : []} />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer-contact bg-gray">
        {/* form */}
        <div className="flex contact-content">
          <div className="footer-content m-auto flex flex-col gap-5">
            <h1 className="text-white font-bold projects-title text-center">
              Contacts
            </h1>
            <p className="main-user-desc">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="footer-form-content relative">
            <form
              onSubmit={(e) => handlePostMessages(e)}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 input-content m-auto">
                  <div
                    className="block block-input relative"
                    data-wrong="Sorry, invalid format here"
                  >
                    <input
                      type="text"
                      name="from"
                      id="name"
                      onChange={(e) =>
                        customHandleChange(e, message, setMessage)
                      }
                      value={message.from}
                      placeholder="name"
                      className="contact-input text-white outline-none w-11/12"
                      required
                    />
                    <p className="error-msg">
                      <MdErrorOutline />
                    </p>
                  </div>
                  <div
                    className="block block-input relative"
                    data-wrong="Sorry, invalid format here"
                  >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      onChange={(e) =>
                        customHandleChange(e, message, setMessage)
                      }
                      value={message.email}
                      className="contact-input text-white outline-none w-11/12"
                      required
                    />
                    <p className="error-msg">
                      <MdErrorOutline />
                    </p>
                  </div>
                  <div
                    className="block block-input relative"
                    data-wrong="Sorry, invalid format here"
                  >
                    <textarea
                      name="messages"
                      id="message"
                      onChange={(e) =>
                        customHandleChange(e, message, setMessage)
                      }
                      value={message.messages}
                      placeholder="message"
                      className="contact-input text-white outline-none w-11/12 h-32 min-h-32 resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end input-content m-auto">
                  <LinkOrBtn
                    variant="btn"
                    type="submit"
                    btnText="Send Message"
                  />
                </div>
              </div>
            </form>
            <div className="absolute w-9/12 max-w-[250px] z-[-1] bottom-10 left-0 absolute-pri-left">
              <figure className="absolute-pri-left">
                <img
                  src={"/images/design/primary.png"}
                  alt="primary.png"
                  className="reset-image"
                />
              </figure>
            </div>
          </div>
        </div>
        {/* menu */}
        <div className="footer-menu">
          <div className="footer-menu-content m-auto">
            <div className="flex flex-col gap-5 items-center page-container navbar-content">
              <Navbar data={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
