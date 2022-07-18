import '../../../../index.css';
import './Explanation.css';

import React from 'react';

const Explanation = () => {
  return (
    <>
        <div className="explanation">
            <div className="container">
                <div className="explanation__inner">
                    <div className="explanation__content">
                        <h3>Prove you read better</h3>
                        <p>Here you can try your hand. First check your profile page and can you continue</p>
                    </div>

                    <div className="check">
                        <button className="button explanation__btn">Go to profile page</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Explanation;
