import ContactBtn from "./layout/ContactBtn";
import PropTypes from 'prop-types';


export default function Header({data}) {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-section">
          <h1 className="header-title">
            Nice to meet you! I’m{" "}
            <span className="header-title_text">{Object.values(data).length==0?"Adama Keys":data.name}</span>
          </h1>
          <p className="header-desc">
            {Object.values(data).length==0?"Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.":data.info}
          </p>
          <div className="header-btn">
            <ContactBtn type="button" link="contact-me" value="CONTACT ME" />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes={
  data:PropTypes.object
}
