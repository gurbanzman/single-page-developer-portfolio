import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


export default function TitleName({data}) {
  return (
   <Link to={"/"} className="navbar-title_text">{Object.values(data).length==0?"Adama Keys":data.userName}</Link>
  )
}

TitleName.propTypes={
  data:PropTypes.object
}