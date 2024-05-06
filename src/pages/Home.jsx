import Header from "../Header";
import Line from "../Line";
import Experience from "../Experience";
import Projects from "../Projects";
import Profile from "../Profile";
import PropTypes from 'prop-types';


export default function Home({data}) {
  return (
    <>
      <Header data={data}/>
      <div className="line-section container">
        <Line />
      </div>
      <Experience data={data}/>
      <Projects />
      <Profile />
    </>
  );
}

Home.propTypes={
  data:PropTypes.object
}
