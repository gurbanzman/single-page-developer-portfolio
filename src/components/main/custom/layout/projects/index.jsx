import BlogUrl from "../../../blog-url";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import customProjectsData from "../../data/projects";
import { switchCount } from "../../../../../utils/switchCount";
import { toast } from "react-toastify";
import {
  getOneProject,
  getProject,
  updateProject,
} from "../../../../../hooks/data";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CustomProjects({ data }) {
  const { id } = useParams();
  let [likes, setLikes] = useState([]);
  const [project, setProject] = useState([]);
  useEffect(() => {
    setProject(data);
  }, [data]);

  const handlePutClick = async (e, _id) => {
    try {
      setLikes((prev) => {
        if (prev.includes(id)) {
          return prev.filter((id) => id !== id);
        } else {
          return [...prev, id];
        }
      });

      await updateProject(_id, { likes });
      const projectData = await getProject();
      setProject(projectData.data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <ul className="projects-list flex flex-wrap">
      {id
        ? project.map((item) => {
            return (
              <li key={item._id} className="projects-list-item">
                <figure className="projects-list-item-image relative">
                  <img
                    src={`${import.meta.env.VITE_BACKEND}/${item.projectImage}`}
                    alt="design.png"
                    className="reset-image"
                  />
                  <BlogUrl
                    domainURL={item.domainURL}
                    githubURL={item.githubURL}
                    customClass={`desktop-projects-link`}
                  />
                </figure>
                <div className="projects-list-item-body">
                  <ul className="projects-list-item-skills flex flex-col gap-2">
                    <li className="skills-list-item flex flex-col gap-2">
                      <span className="skills-list-item-head skills--list text-white">
                        {item.projectName}
                      </span>
                    </li>
                    <li className="skills-list-item flex items-center gap-3 flex-wrap">
                      {item.skills &&
                        item.skills.map((skill) => {
                          return (
                            <span
                              key={skill.skills}
                              className="skills-list-item-head skills--list skills-list-span text-white"
                            >
                              {skill.skills}
                            </span>
                          );
                        })}
                    </li>
                  </ul>
                  <div
                    className="project-bottom flex justify-between items-center"
                    style={{ marginTop: "20px" }}
                  >
                    <BlogUrl
                      domainURL={item.domainURL}
                      githubURL={item.githubURL}
                    />
                    <div
                      onClick={(e) => handlePutClick(e, item._id)}
                      className="group text-2xl text-white cursor-pointer flex items-center gap-2"
                    >
                      <button type="button">
                        {item.likes.includes(id) ? (
                          <AiFillLike />
                        ) : (
                          <BiLike />
                        )}
                      </button>
                      <span className="text-lg">
                        {switchCount(
                          likes.length > 1 ? likes.length : item.likes.length
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        : customProjectsData.map((item) => {
            return (
              <li key={item._id} className="projects-list-item">
                <figure className="projects-list-item-image relative">
                  <img
                    src={`${item.profileImage}`}
                    alt="design.png"
                    className="reset-image"
                  />
                  <BlogUrl
                    domainURL={item.domainURL}
                    githubURL={item.githubURL}
                    customClass={`desktop-projects-link`}
                  />
                </figure>
                <div className="projects-list-item-body">
                  <ul className="projects-list-item-skills flex flex-col gap-2">
                    <li className="skills-list-item flex flex-col gap-2">
                      <span className="skills-list-item-head skills--list text-white">
                        {item.projectName}
                      </span>
                    </li>
                    <li className="skills-list-item flex items-center gap-3 flex-wrap">
                      {item.skills &&
                        item.skills.map((skill) => {
                          return (
                            <span
                              key={skill.skills}
                              className="skills-list-item-head skills--list skills-list-span text-white"
                            >
                              {skill.skills}
                            </span>
                          );
                        })}
                    </li>
                  </ul>
                  <div
                    className="project-bottom flex justify-between items-center"
                    style={{ marginTop: "20px" }}
                  >
                    <BlogUrl
                      domainURL={item.domainURL}
                      githubURL={item.githubURL}
                    />
                    <p className="group flex items-center gap-2 text-2xl text-white cursor-pointer">
                      <button type="button">
                        <BiLike />
                      </button>
                      <span className="text-lg">123</span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
    </ul>
  );
}

export default CustomProjects;
