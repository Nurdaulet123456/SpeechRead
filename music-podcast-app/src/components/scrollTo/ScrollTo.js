import './ScrollTo.css';

import React from 'react';

const ScrollTo = ({click}) => {
  return (
    <button className='main-block__btn scroll' onClick={click}>
        To
    </button>
  );
}

export default ScrollTo;
