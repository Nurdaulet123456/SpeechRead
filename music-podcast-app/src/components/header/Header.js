// TODO: import css files
import './Header.css';
import '../../index.css'
// TODO: import other files 



const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <h2 className="header__title">CountWords</h2>
                    </div>

                    <nav className="nav">
                        <button className="nav__link">Регистарция</button>
                        <button className="nav__link">Войти</button>
                    </nav>

                    <button className="burger" type="button">
                        <span className="burger__item"></span>
                        <span className="burger__item"></span>
                        <span className="burger__item"></span>
                    </button>
                </div>
            </div>
        </div>
    );
    
}

export default Header;