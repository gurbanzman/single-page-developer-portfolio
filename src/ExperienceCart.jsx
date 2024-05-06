import PropTypes from 'prop-types';

export default function ExperienceCart({name,time}) {
  return (
    <div className="experience-section_cart">
      <h1 className="experience-cart_title">{name}</h1>
      <p className="experience-cart_subtitle">{time} Experience</p>
    </div>
  );
}

ExperienceCart.propTypes={
   name:PropTypes.string,
   time:PropTypes.string
}
