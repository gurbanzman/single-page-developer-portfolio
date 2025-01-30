import { MdErrorOutline } from "react-icons/md";
import customSkillsData from "../../components/main/custom/data/skills/index";
import customProjectsData from "../../components/main/custom/data/projects/index";
import { useNavigate, useParams } from "react-router-dom";
import LinkOrBtn from "../../components/main/ui/button";
// import images
// import { adamkeyes, primary, primaryRight } from "../../../public/images";
import CustomSkills from "../../components/main/custom/layout/skills";
import CustomProjects from "../../components/main/custom/layout/projects";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../hooks/data";
import Navbar from "../../components/main/navbar";
import { isLoggedIn } from "../../hooks/middleware";

const adamkeyes = "../../../../public/images/avatar/profile.png";

function HomePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  if(!isLoggedIn()){
    navigate("/");
  }

  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
  
  

  return (
    <div className="portfolio">
      {/* navbar */}
      <div className="navbar">
        <div className="flex flex-col gap-5 items-center page-container navbar-content">
          <Navbar data={data} />
        </div>
      </div>
      {/* main */}
      <div className="main">
        {/* user */}
        <div className="flex main-text main-bottom relative">
          <div className="main-image page-container flex justify-end items-end">
            <figure className="w-full user-profile">
              <img
                src={data ? data.data.profileImage : adamkeyes}
                alt="profile.png"
                className="reset-image"
              />
            </figure>
          </div>
          <div className="main-user flex">
            <h1 className="main-user-title">
              Nice to meet you! I’m{" "}
              <span className="main-user-title-name border-b-3 border-lightGreen">
                {data ? data.data.fullName : "adamkeyes"}
              </span>
              .
            </h1>
            <p className="main-user-desc">
              {data
                ? data.data.description
                : "Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love."}
            </p>
            {id ? (
              ''
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
                src={"../../public/images/design/primary.png"}
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
          <CustomSkills data={data ? data.data.skills : customSkillsData} />
          <div className="absolute w-9/12 max-w-[250px] z-[-1] bottom-[-5rem] right-0 absolute-pri-right">
            <figure>
              <img
                src={"../../../public/images/design/primarry-right.png"}
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
                  link="/added-project/123"
                  linkText="Added"
                />
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="projects-list-container">
            <CustomProjects data={customProjectsData} />
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
            <form action="" className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 input-content m-auto">
                  <div
                    className="block block-input relative"
                    data-wrong="Sorry, invalid format here"
                  >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="name"
                      className="contact-input text-white outline-none w-11/12"
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
                      className="contact-input text-white outline-none w-11/12"
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
                      name="message"
                      id="message"
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
                  src={"../../public/images/design/primary.png"}
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
              <Navbar data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
