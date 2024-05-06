import PropTypes from 'prop-types';

export default function Input({type,name,placeholder,onChange}) {
  return (
    <input
      type={type}
      name={name}
      id="text"
      className="footer-contact_input"
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
}

Input.propTypes={
   type:PropTypes.string,
   name: PropTypes.string,
   placeholder:PropTypes.string,
   onChange:PropTypes.func,
}
