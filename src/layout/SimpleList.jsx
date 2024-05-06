import PropTypes from 'prop-types';

export default function SimpleList({value}) {
  return (
    <li className="create-experience">{value}</li>
  )
}

SimpleList.propTypes={
   value: PropTypes.string
}
