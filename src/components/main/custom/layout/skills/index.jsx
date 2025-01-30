function CustomSkills({ data }) {
  return (
    <ul className="skills-list flex">
      {data &&
        data.map((item) => {
          return (
            <li key={item._id} className="skills-list-item flex flex-col">
              <span className="skills-list-item-head text-white">
                {item.skill_name}
              </span>
              <span className="skills-list-item-body">
                {item.skill_period} Experience
              </span>
            </li>
          );
        })}
    </ul>
  );
}

export default CustomSkills;
