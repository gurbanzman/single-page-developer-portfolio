// import { useParams } from "react-router-dom";
import BlogUrl from "../../../blog-url";
import { BiLike } from "react-icons/bi";

function CustomProjects({ data }) {
  
  return (
    <ul className="projects-list flex flex-wrap">
      {data &&
        data.map((item) => {
          return (
            <li key={item.id} className="projects-list-item">
              <figure className="projects-list-item-image relative">
                <img
                  src={item.profileImage}
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
                      DESIGN PORTFOLIO
                    </span>
                  </li>
                  <li className="skills-list-item flex items-center gap-3 flex-wrap">
                    {item.skills &&
                      item.skills.map((skill) => {
                        return (
                          <span
                            key={skill}
                            className="skills-list-item-head skills--list skills-list-span text-white"
                          >
                            {skill}
                          </span>
                        );
                      })}
                  </li>
                </ul>
                <div
                  className="flex justify-between items-center"
                  style={{ marginTop: "20px" }}
                >
                  <BlogUrl
                    domainURL={item.domainURL}
                    githubURL={item.githubURL}
                  />
                  <p className="group text-2xl text-white cursor-pointer">
                    <button type="button">
                      <BiLike />
                    </button>
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
