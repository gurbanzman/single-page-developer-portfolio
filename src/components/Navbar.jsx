import TitleName from "./TitleName";
import PropTypes from 'prop-types';

export default function Navbar({data}) {
  // const menuLists=[
  //   {
  //     id: "1"
  //   }
  // ]
  return (
    <nav className="navbar">
      <div className="navbar-title container">
        <TitleName data={data}/>
      </div>
    </nav>
  )
}

Navbar.propTypes={
  data:PropTypes.object
}
