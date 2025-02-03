import { MdErrorOutline } from "react-icons/md";
import LinkOrBtn from "../../components/main/ui/button";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { customHandleChange, handleFileChange } from "../../utils/handleChange";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { addProject } from "../../hooks/data";

function AddedProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  // for skills
  const [skills, setSkills] = useState({
    skills: "HTML",
  });
  const [arr, setArr] = useState([]);
  const [projectImage, setProjectImage] = useState("");
  const [basicInfo, setBasicInfo] = useState({
    projectName: "",
    domainURL: "",
    githubURL: "",
  });

  const handleClick = () => {
    setArr([...arr, skills]);
    const findElement = arr.find((item) => item.skills === skills.skills);
    if (findElement) {
      setArr(arr.filter((item) => item));
    }
  };

  const handleRemoveClick = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);
  };

  const mutation = useMutation({
    mutationFn: addProject,
    onSuccess: (data) => {
      toast.success("Project added successfully!");
      navigate("/" + id);
      console.log(data.data);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to add user.");
    },
  });
  async function handleSubmit(e) {
    e.preventDefault();
    if (!projectImage) {
      toast.warning("Please upload your project image");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("projectImage", projectImage);
      formData.append("projectName", basicInfo.projectName);
      formData.append("githubURL", basicInfo.githubURL);
      formData.append("domainURL", basicInfo.domainURL);
      formData.append("userID", id);
      formData.append("skills", JSON.stringify(arr));
      mutation.mutate(formData);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="create-user">
      <div className="create-head">
        <h1 className="text-white font-bold projects-title create-head">
          Added Project
        </h1>
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 input-content m-auto">
            {/* basic info */}
            <div
              className="block block-input relative"
              data-wrong="Sorry, invalid format here"
            >
              <input
                type="text"
                name="projectName"
                id="projectName"
                placeholder="projectName"
                onChange={(e) => customHandleChange(e, basicInfo, setBasicInfo)}
                className="contact-input text-white outline-none w-11/12"
                required
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            {/* social links */}
            <div
              className="block block-input relative"
              data-wrong="Sorry, invalid format here"
            >
              <input
                type="url"
                name="githubURL"
                id="githubURL"
                placeholder="githubURL"
                onChange={(e) => customHandleChange(e, basicInfo, setBasicInfo)}
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
                type="url"
                name="domainURL"
                id="domainURL"
                placeholder="domainURL or websiteURL"
                onChange={(e) => customHandleChange(e, basicInfo, setBasicInfo)}
                className="contact-input text-white outline-none w-11/12"
                required
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            {/* project image */}
            <div
              className="block block-input relative"
              data-wrong="Sorry, invalid format here"
            >
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                placeholder="profileImage"
                className="contact-input text-white outline-none w-11/12"
                onChange={(e) => handleFileChange(e, setProjectImage)}
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            {/* skills */}
            <div
              className="flex flex-col gap-4 items-start block-input relative skills-container"
              data-wrong="Sorry, invalid format here"
            >
              <div className="w-full">
                <label className="skill-label text-2xl block w-full text-white">
                  Skill:
                  <select
                    name="skills"
                    className="contact-input text-white outline-none w-full contact-select block"
                    onChange={(e) => customHandleChange(e, skills, setSkills)}
                  >
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="Node.js">Node.js</option>
                  </select>
                </label>
              </div>
              {arr && (
                <ul className="your-skills-list w-full flex flex-col gap-3">
                  {arr.map((item) => {
                    return (
                      <li
                        key={item.skills}
                        className="your-skills-option flex justify-between items-center"
                      >
                        <div className="flex items-center gap-3">
                          <span className="your-skill">{item.skills}</span>
                        </div>
                        <div className="remove-btn">
                          <button
                            type="button"
                            className="block"
                            onClick={handleRemoveClick}
                          >
                            <IoIosRemoveCircleOutline />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
              <div className="flex justify-center input-content m-auto">
                <LinkOrBtn
                  variant="btn"
                  type="button"
                  btnText="add"
                  handleClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center input-content m-auto">
            <LinkOrBtn variant="btn" type="submit" btnText="Added" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddedProjectPage;
