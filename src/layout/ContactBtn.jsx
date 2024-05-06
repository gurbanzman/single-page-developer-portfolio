
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function ContactBtn({type,link,value}) {
  return (
   <button type={type} className="btn btn-none btn-success">
    <Link to={link} target='_blank'>{value}</Link>
   </button>
  )
}


ContactBtn.propTypes={
  type: PropTypes.string,
  link:PropTypes.string,
  value:PropTypes.string
}
