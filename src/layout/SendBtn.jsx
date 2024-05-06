import PropTypes from 'prop-types';

export default function SendBtn({type,value,onClick,success}) {
  return (
    <button type={type} disabled={success==true? true:false} className="btn btn-none btn-success" onClick={onClick}>
        {value}
    </button>
  );
}

SendBtn.propTypes={
   type:PropTypes.string,
   value:PropTypes.string,
   onClick:PropTypes.func,
   success: PropTypes.bool
}
