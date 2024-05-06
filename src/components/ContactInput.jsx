import Input from "../layout/Input";
import PropTypes from 'prop-types';

export default function ContactInput({ type, name, placeholder,onChange}) {
  return (
    <div className={"footer-form_single"}>
      <Input type={type} name={name} placeholder={placeholder} onChange={onChange}/>  
    </div>
  );
}

ContactInput.propTypes={
   type:PropTypes.string,
   name: PropTypes.string,
   placeholder:PropTypes.string,
   onChange:PropTypes.func,
}
