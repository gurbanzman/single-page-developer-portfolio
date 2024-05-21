import { Link } from "react-router-dom";
import ContactBtn from "./layout/ContactBtn";
import ProjectLink from "./ProjectLink";
import port from "./assets/images/design-one.png"

export default function Projects() {
  return (
    <main className="main">
      <section className="main-section container">
        <div className="main-section_title">
          <h1 className="main-section_projects">Projects</h1>
          <div className="footer-create_btn">
            <ContactBtn
              type={`button`}
              link={`create-your-own-portfolio`}
              value={`CREATE YOUR OWN PORTFOLIO`}
            />
            <Link to={`create-your-own-portfolio`}><i className="icon-chevron-thin-right"></i></Link>
          </div>
        </div>
        <div className="main-section_body">
          <div className="main-section_project">
            <ProjectLink
              img={port}
              page={`contact-me`}
              code={`contact-me`}
              name={`Design`}
              arr={[]}
            />
            <ProjectLink
              img={port}
              page={`contact-me`}
              code={`contact-me`}
              name={`Design`}
              arr={[]}
            />
            <ProjectLink
              img={port}
              page={`contact-me`}
              code={`contact-me`}
              name={`Design`}
              arr={[]}
            />
            <ProjectLink
              img={port}
              page={`contact-me`}
              code={`contact-me`}
              name={`Design`}
              arr={[]}
            />
            <ProjectLink
              img={port}
              page={`contact-me`}
              code={`contact-me`}
              name={`Design`}
              arr={[]}
            />
            <ProjectLink
              img={port}
              page={`contact-me`}
              code={`contact-me`}
              name={`Design`}
              arr={[]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
