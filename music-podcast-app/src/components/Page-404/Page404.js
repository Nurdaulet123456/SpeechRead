// ? CSS files
import './Error.message.css';

// ? Import other files 
import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from './error.gif';
import { Helmet } from 'react-helmet'

const ErrorMessage = () => {
  return (
    <>
    <Helmet>
        <title>Page not found</title>
    </Helmet>

    
        <div className="error">
            <div className="container">
                <div className="error__inner">
                    <div className="error__img">
                    <img className='img' style={{ width: "250px", height: "250px",objectFit: 'contain'}} src={ErrorImg} alt="ErrorMessage" />
                    </div>

                    <div className="error__content">
                        <h1 className="error__message">404</h1>
                        <p>Page not found</p>

                        <Link className='button' to={'/'}>Go to home</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default ErrorMessage;
