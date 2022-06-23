// TODO: import css files
import './Header.css';
import '../../index.css'
// TODO: import other files 
import {Modal, LoginModal} from '../modal/Modal';
import { useState} from 'react'



const Header = () => {

    const [isOpen, setisOpen] = useState(false);
    const [loginModal, setloginModal] = useState(false);

    return (
        <>
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <h2 className="header__title">CountWords</h2>
                    </div>

                    <nav className="nav">
                        <button className="nav__link" onClick={() => setisOpen(true)}>Регистарция</button>
                        <button className="nav__link" onClick={() => setloginModal(true)}>Войти</button>
                    </nav>

                    <button className="burger" type="button">
                        <span className="burger__item"></span>
                        <span className="burger__item"></span>
                        <span className="burger__item"></span>
                    </button>
                </div>

            </div>
        </div>

        <Modal open={isOpen} onClose={() => setisOpen(false)}>
            <h3 className='modal__title'>Registration</h3>
            <form className='form'>
                <div>
                    <input className='input' type="text" name='name' placeholder='Your Name'/>
                </div>

                <div>
                    <input className='input' type="text" name='username' placeholder='Enter your username'/>
                </div>

                <div>
                    <input className='input' type="email" name='email' placeholder='Enter your email'/>
                </div>

                <div>
                    <input className='input' type="password" name='password' placeholder='Enter your password'/>
                </div>

                <div>
                    <input className='input' type="password" name='repeat password' placeholder='Repeat your password'/>
                </div>

                <div style={{textAlign: 'center'}}>
                    <button className='button' type='submit'>Registration</button>
                </div>
            </form>
        </Modal>

        <LoginModal open={loginModal} onClose={() => setloginModal(false)}>
        <h3 className='modal__title'>Login</h3>
            <form className='form'>
                <div>
                    <input className='input' type="email" name='email' placeholder='Enter your email'/>
                </div>

                <div>
                    <input className='input' type="password" name='password' placeholder='Enter your password'/>
                </div>

                <div style={{textAlign: 'center'}}>
                    <button className='button' type='submit'>Login</button>
                </div>
            </form>
        </LoginModal>
        </>
    );
    
}

export default Header;