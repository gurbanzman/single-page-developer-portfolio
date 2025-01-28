import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaGitlab } from "react-icons/fa6";

import { MdErrorOutline } from "react-icons/md";

import { Link } from "react-router-dom";
// import images
import adamkeyes from "/images/avatar/profile.png";
import primary from "/images/design/primary.png";
import primaryRight from "/images/design/primarry-right.png";
import design from "/images/card/card-page.png";

function HomePage() {
  return (
    <div className="portfolio">
      {/* navbar */}
      <div className="navbar">
        <div className="flex flex-col gap-5 items-center page-container navbar-content">
          <h1 className="text-white text-2xl font-bold">adamkeyes</h1>
          <ul className="flex justify-between items-center w-full">
            <li>
              <a
                href="https://github.com/adamkeyes"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white text-2xl"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adamkeyes"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white text-2xl"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adamkeyes"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white text-2xl"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adamkeyes"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white text-2xl"
              >
                <FaGitlab />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* main */}
      <div className="main">
        {/* user */}
        <div className="flex main-text main-bottom relative">
          <div className="main-image page-container flex justify-end items-end">
            <figure className="w-full user-profile">
              <img src={adamkeyes} alt="profile.png" className="reset-image" />
            </figure>
          </div>
          <div className="main-user flex">
            <h1 className="main-user-title">
              Nice to meet you! I’m{" "}
              <span className="main-user-title-name border-b-3 border-lightGreen">
                Adam Keyes
              </span>
              .
            </h1>
            <p className="main-user-desc">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <Link to={`#`} className="main-user-link block">
              Contact ME
            </Link>
          </div>
          <div className="absolute w-9/12 max-w-[250px] top-15 left-0 absolute-pri-left">
            <figure>
              <img src={primary} alt="primary.png" className="reset-image" />
            </figure>
          </div>
          <div className="absolute top-[13rem] right-0 w-16 absolute-circle">
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
          <ul className="skills-list flex">
            <li className="skills-list-item flex flex-col">
              <span className="skills-list-item-head text-white">HTML</span>
              <span className="skills-list-item-body">4 Years Experience</span>
            </li>
            <li className="skills-list-item flex flex-col">
              <span className="skills-list-item-head text-white">HTML</span>
              <span className="skills-list-item-body">4 Years Experience</span>
            </li>
            <li className="skills-list-item flex flex-col">
              <span className="skills-list-item-head text-white">HTML</span>
              <span className="skills-list-item-body">4 Years Experience</span>
            </li>
            <li className="skills-list-item flex flex-col">
              <span className="skills-list-item-head text-white">HTML</span>
              <span className="skills-list-item-body">4 Years Experience</span>
            </li>
          </ul>
          <div className="absolute w-9/12 max-w-[250px] bottom-[-5rem] right-0 absolute-pri-right">
            <figure>
              <img
                src={primaryRight}
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
            <p>
              <Link to={`#`} className="main-user-link block">
                Create
              </Link>
            </p>
          </div>
          <div className="projects-list-container">
            <ul className="projects-list flex flex-wrap">
              <li className="projects-list-item">
                <figure className="projects-list-item-image relative">
                  <img src={design} alt="design.png" className="reset-image" />
                  <p className="projects-list-item-links flex justify-between items-center desktop-projects-link">
                    <Link to={`#`} className="main-user-link block">
                      VIEW PROJECT
                    </Link>
                    <Link to={`#`} className="main-user-link block">
                      VIEW CODE
                    </Link>
                  </p>
                </figure>
                <div className="projects-list-item-body">
                  <ul className="projects-list-item-skills flex flex-col gap-2">
                    <li className="skills-list-item flex flex-col gap-2">
                      <span className="skills-list-item-head skills--list text-white">
                        DESIGN PORTFOLIO
                      </span>
                    </li>
                    <li className="skills-list-item flex items-center gap-3 flex-wrap">
                      <span className="skills-list-item-body skills--list">
                        HTML
                      </span>
                      <span className="skills-list-item-body skills--list">
                        CSS
                      </span>
                      <span className="skills-list-item-body skills--list">
                        Javascript
                      </span>
                      <span className="skills-list-item-body skills--list">
                        CSS
                      </span>
                    </li>
                  </ul>
                  <p className="projects-list-item-links flex justify-between items-center">
                    <Link to={`#`} className="main-user-link block">
                      VIEW PROJECT
                    </Link>
                    <Link to={`#`} className="main-user-link block">
                      VIEW CODE
                    </Link>
                  </p>
                </div>
              </li>
              <li className="projects-list-item">
                <figure className="projects-list-item-image relative">
                  <img src={design} alt="design.png" className="reset-image" />
                  <p className="projects-list-item-links flex justify-between items-center desktop-projects-link">
                    <Link to={`#`} className="main-user-link block">
                      VIEW PROJECT
                    </Link>
                    <Link to={`#`} className="main-user-link block">
                      VIEW CODE
                    </Link>
                  </p>
                </figure>
                <div className="projects-list-item-body">
                  <ul className="projects-list-item-skills flex flex-col gap-2">
                    <li className="skills-list-item flex flex-col gap-2">
                      <span className="skills-list-item-head skills--list text-white">
                        DESIGN PORTFOLIO
                      </span>
                    </li>
                    <li className="skills-list-item flex items-center gap-3 flex-wrap">
                      <span className="skills-list-item-body skills--list">
                        HTML
                      </span>
                      <span className="skills-list-item-body skills--list">
                        CSS
                      </span>
                      <span className="skills-list-item-body skills--list">
                        Javascript
                      </span>
                      <span className="skills-list-item-body skills--list">
                        CSS
                      </span>
                    </li>
                  </ul>
                  <p className="projects-list-item-links flex justify-between items-center">
                    <Link to={`#`} className="main-user-link block">
                      VIEW PROJECT
                    </Link>
                    <Link to={`#`} className="main-user-link block">
                      VIEW CODE
                    </Link>
                  </p>
                </div>
              </li>
              <li className="projects-list-item">
                <figure className="projects-list-item-image relative">
                  <img src={design} alt="design.png" className="reset-image" />
                  <p className="projects-list-item-links flex justify-between items-center desktop-projects-link">
                    <Link to={`#`} className="main-user-link block">
                      VIEW PROJECT
                    </Link>
                    <Link to={`#`} className="main-user-link block">
                      VIEW CODE
                    </Link>
                  </p>
                </figure>
                <div className="projects-list-item-body">
                  <ul className="projects-list-item-skills flex flex-col gap-2">
                    <li className="skills-list-item flex flex-col gap-2">
                      <span className="skills-list-item-head skills--list text-white">
                        DESIGN PORTFOLIO
                      </span>
                    </li>
                    <li className="skills-list-item flex items-center gap-3 flex-wrap">
                      <span className="skills-list-item-body skills--list">
                        HTML
                      </span>
                      <span className="skills-list-item-body skills--list">
                        CSS
                      </span>
                      <span className="skills-list-item-body skills--list">
                        Javascript
                      </span>
                      <span className="skills-list-item-body skills--list">
                        CSS
                      </span>
                    </li>
                  </ul>
                  <p className="projects-list-item-links flex justify-between items-center">
                    <Link to={`#`} className="main-user-link block">
                      VIEW PROJECT
                    </Link>
                    <Link to={`#`} className="main-user-link block">
                      VIEW CODE
                    </Link>
                  </p>
                </div>
              </li>
              <li className="projects-list-item">
                <figure className="projects-list-item-image relative">
                  <img src={design} alt="design.png" className="reset-image" />
                  <p className="projects-list-item-links flex justify-between items-center desktop-projects-link">
                    <Link to={`#`} className="main-user-link block">
                      VIEW PROJECT
                    </Link>
                    <Link to={`#`} className="main-user-link block">
                      VIEW CODE
                    </Link>
                  </p>
                </figure>
                <div className="projects-list-item-body">
                  <ul className="projects-list-item-skills flex flex-col gap-2">
                    <li className="skills-list-item flex flex-col gap-2">
                      <span className="skills-list-item-head skills--list text-white">
                        DESIGN PORTFOLIO
                      </span>
                    </li>
                    <li className="skills-list-item flex items-center gap-3 flex-wrap">
                      <span className="skills-list-item-body skills--list">
                        HTML
                      </span>
                      <span className="skills-list-item-body skills--list">
                        CSS
                      </span>
                      <span className="skills-list-item-body skills--list">
                        Javascript
                      </span>
                      <span className="skills-list-item-body skills--list">
                        CSS
                      </span>
                    </li>
                  </ul>
                  <p className="projects-list-item-links flex justify-between items-center">
                    <Link to={`#`} className="main-user-link block">
                      VIEW PROJECT
                    </Link>
                    <Link to={`#`} className="main-user-link block">
                      VIEW CODE
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
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
                  <Link to={`#`} className="main-user-link block">
                    Send Message
                  </Link>
                </div>
              </div>
            </form>
            <div className="absolute w-9/12 max-w-[250px] bottom-10 left-0 absolute-pri-left">
              <figure className="absolute-pri-left">
                <img src={primary} alt="primary.png" className="reset-image" />
              </figure>
            </div>
          </div>
        </div>
        {/* menu */}
        <div className="footer-menu">
          <div className="footer-menu-content m-auto">
            <div className="flex flex-col gap-5 items-center page-container navbar-content">
              <h1 className="text-white text-2xl font-bold">adamkeyes</h1>
              <ul className="flex justify-between items-center w-full">
                <li>
                  <a
                    href="https://github.com/adamkeyes"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-white text-2xl"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/adamkeyes"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-white text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/adamkeyes"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-white text-2xl"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/adamkeyes"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-white text-2xl"
                  >
                    <FaGitlab />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
