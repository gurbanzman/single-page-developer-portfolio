import Input from "../layout/Input";
import PropTypes from 'prop-types';


export default function CreateExperienceList({value,arr,func}) {
  return (
    <li className="create-portfolio_gain">
      <span className="create-port_name">{value}</span>{" "}
      <Input type={`checkbox`} name={`check`} placeholder={""} />
      <input
        type="text"
        name="text"
        disabled={arr? false:true}
        placeholder="For Example: 2 years"
        className="experience-input"
        onChange={func}
      />
    </li>
  );
}

CreateExperienceList.propTypes={
   value:PropTypes.string,
   arr:PropTypes.bool,
   func: PropTypes.func
}
