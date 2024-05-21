import PropTypes from 'prop-types';
import ExperienceCart from './ExperienceCart';
// import ExperienceCart from './ExperienceCart';

export default function Experience({data}) {
  console.log(data);
  return (
    <section className="experience-section">
      <div className="experience-section_user container">
        <div className="experience-section_carts">
          {data.exp ==undefined? <ExperienceCart name={`HTML`} time={`ed`}/> : data.exp.map((item,index) => {
            return item.value==="" || item.text ===""? "":<ExperienceCart key={index} name={item.value} time={item.text}/>
          })}
        </div>
      </div>
    </section>
  );
}

Experience.propTypes={
  data:PropTypes.object
}
