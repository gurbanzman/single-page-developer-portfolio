import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function List({className,value}) {
  return (
    <li><Link to={value} className={className} target='_blank'></Link></li>
  )
}

List.propTypes={
   className:PropTypes.string,
   value:PropTypes.string
}
