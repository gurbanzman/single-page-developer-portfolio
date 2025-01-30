import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navbar({data}) {
  return (
    <>
      <h1 className="text-white text-2xl font-bold">
        {data && data.data.username || "adamkeyes"}
      </h1>
      <ul className="flex justify-between items-center w-full">
        <li>
          <a
            href={data && data.githubURL || "https://github.com/adamkeyes"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-white text-2xl"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href={data && data.linkedinURL || "https://github.com/adamkeyes"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-white text-2xl"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href={data && data.twitterURL || "https://github.com/adamkeyes"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-white text-2xl"
          >
            <FaXTwitter />
          </a>
        </li>
        <li>
          <a
            href={data && data.gitlabURL || "https://github.com/adamkeyes"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-white text-2xl"
          >
            <FaGitlab />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
