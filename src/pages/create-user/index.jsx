import { MdErrorOutline } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import LinkOrBtn from "../../components/main/ui/button";
import { useState } from "react";

import { useFormik } from "formik";

import { customHandleChange, handleFileChange } from "../../utils/handleChange";
import { createUserSchema } from "../../schemas/createUserSchemas";
import { toast } from "react-toastify";
import {  useMutation } from "@tanstack/react-query";

import { addUser } from "../../hooks/data";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

function CreateUserPage() {
  const navigate = useNavigate();

  // for skills
  const [skills, setSkills] = useState({
    skill_name: "HTML",
    skill_period: "1 year",
  });
  const [arr, setArr] = useState([]);

  // for profile image
  const [profileImage, setProfileImage] = useState("");

  const handleClick = () => {
    setArr([...arr, skills]);
    const findElement = arr.find((item) => item.skill_name === skills.skill_name);
    if (findElement) {
      setArr(arr.filter((item) => item));
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      githubURL: "",
      gitlabURL: "",
      linkedinURL: "",
      twitterURL: "",
      description: "",
    },
    validationSchema: createUserSchema,
    onSubmit: submit,
  });

  const handleRemoveClick = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);
  };

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      toast.success("User added successfully!");
      Cookies.set("user", data.data._id);
      navigate("/" + data.data._id);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to add user.");
    },
  });
  async function submit(values, action) {
    if (!profileImage) {
      toast.warning("Please upload your profile image");
      return;
    }

    try {
      const formData = new FormData();

      // Append the profile image file
      formData.append("profileImage", profileImage);

      // Append other user data
      formData.append("fullName", values.fullName);
      formData.append("username", values.username);
      formData.append("githubURL", values.githubURL);
      formData.append("gitlabURL", values.gitlabURL);
      formData.append("linkedinURL", values.linkedinURL);
      formData.append("twitterURL", values.twitterURL);
      formData.append("description", values.description);
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
          Create Your Account
        </h1>
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-8"
        encType="multipart/form-data"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 input-content m-auto">
            {/* basic info */}
            <div
              className={`block block-input relative ${
                errors.username ? "wrong" : ""
              }`}
              data-wrong={errors.username ? errors.username : ""}
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                className="contact-input text-white outline-none w-11/12"
                value={values.username}
                onChange={handleChange}
                required
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            <div
              className={`block block-input relative ${
                errors.fullName ? "wrong" : ""
              }`}
              data-wrong={errors.fullName ? errors.fullName : ""}
            >
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="fullName"
                className="contact-input text-white outline-none w-11/12"
                value={values.fullName}
                onChange={handleChange}
                required
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            {/* social links */}
            <div
              className={`block block-input relative ${
                errors.githubURL ? "wrong" : ""
              }`}
              data-wrong={errors.githubURL ? errors.githubURL : ""}
            >
              <input
                type="url"
                name="githubURL"
                id="githubURL"
                placeholder="githubURL"
                className="contact-input text-white outline-none w-11/12"
                value={values.githubURL}
                onChange={handleChange}
                required
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            <div
              className={`block block-input relative ${
                errors.linkedinURL ? "wrong" : ""
              }`}
              data-wrong={errors.linkedinURL ? errors.linkedinURL : ""}
            >
              <input
                type="url"
                name="linkedinURL"
                id="linkedinURL"
                placeholder="linkedinURL"
                value={values.linkedinURL}
                onChange={handleChange}
                className="contact-input text-white outline-none w-11/12"
                required
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            <div
              className={`block block-input relative ${
                errors.twitterURL ? "wrong" : ""
              }`}
              data-wrong={errors.twitterURL ? errors.twitterURL : ""}
            >
              <input
                type="url"
                name="twitterURL"
                id="twitterURL"
                value={values.twitterURL}
                onChange={handleChange}
                placeholder="twitterURL"
                className="contact-input text-white outline-none w-11/12"
                required
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            <div
              className={`block block-input relative ${
                errors.gitlabURL ? "wrong" : ""
              }`}
              data-wrong={errors.gitlabURL ? errors.gitlabURL : ""}
            >
              <input
                type="url"
                name="gitlabURL"
                id="gitlabURL"
                value={values.gitlabURL}
                onChange={handleChange}
                placeholder="gitlabURL"
                className="contact-input text-white outline-none w-11/12"
                required
              />
              <p className="error-msg">
                <MdErrorOutline />
              </p>
            </div>
            {/* profile image */}
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
                onChange={(e) => handleFileChange(e, setProfileImage)}
                required
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
              <div className="flex justify-between w-full">
                <label className="skill-label text-2xl text-white">
                  Skill:
                  <select
                    name="skill_name"
                    className="contact-input text-white outline-none contact-select block"
                    onChange={(e) => customHandleChange(e, skills, setSkills)}
                  >
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="Node.js">Node.js</option>
                  </select>
                </label>

                <label className="skill-period-label text-2xl text-white">
                  Experience:
                  <select
                    name="skill_period"
                    className="contact-input text-white outline-none contact-select block"
                    onChange={(e) => customHandleChange(e, skills, setSkills)}
                  >
                    <option value="1 year">1 year</option>
                    <option value="2 year">2 years</option>
                    <option value="3 year">3 years</option>
                    <option value="4 year">4 years</option>
                    <option value="5 year">5+ years</option>
                  </select>
                </label>
              </div>
              {arr && (
                <ul className="your-skills-list w-full flex flex-col gap-3">
                  {arr.map((item) => {
                    return (
                      <li
                        key={item}
                        className="your-skills-option flex justify-between items-center"
                      >
                        <div className="flex items-center gap-3">
                          <span className="your-skill">{item.skill_name}</span>
                          <span> - </span>
                          <span className="your-skill-period">
                            {item.skill_period}
                          </span>
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
            {/* description */}
            <div
              className={`block block-input relative ${
                errors.description ? "wrong" : ""
              }`}
              data-wrong={errors.description ? errors.description : ""}
            >
              <textarea
                name="description"
                id="description"
                placeholder="description"
                value={values.description}
                onChange={handleChange}
                className="contact-input text-white outline-none w-11/12 h-32 min-h-32 resize-none"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center input-content m-auto">
            <LinkOrBtn variant="btn" type="submit" btnText="Create" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateUserPage;
