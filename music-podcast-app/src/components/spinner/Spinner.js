import React from "react";
import SpinnerImage from '../../images/icons/Spinner.svg'

const styleSpinner = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const Spinner = () => {
  return (
   <>
    <div className="spinner" style={styleSpinner}>
       <div className="container">
       <img src={SpinnerImage} alt="" width={'100px'}/>
       </div>
    </div>
   </>
  );
};

export default Spinner;
