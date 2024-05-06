import ContactBtn from "./layout/ContactBtn";
import PropTypes from 'prop-types';

export default function ProjectLink({img,page,code,name,arr}) {
  console.log(arr);
  return (
    <div className="main-project">
      <div className="main-project_logo">
        <img src={img} alt="design-one.png" />
        <div className="modal">
          <ContactBtn type="button" link={page} value="VIEW PROJECT" />
          <ContactBtn type="button" link={code} value="VIEW CODE" />
        </div>
      </div>
      <div className="main-project_info">
        <h4 className="project-title">{name}</h4>
        <ul className="project-subtitle">
          <li className="project-subtitle_text">html</li>
        </ul>
      </div>
    </div>
  );
}

ProjectLink.propTypes={
   img:PropTypes.string,
   page:PropTypes.string,
   code:PropTypes.string,
   name:PropTypes.string,
   arr:PropTypes.array,
}
