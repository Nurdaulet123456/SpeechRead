// TODO: import css files
import '../../index.css'
import './Main.css';

// TODO: import other files
import MainImgaes from '../../images/icons/freepik--Character--inject-31.svg';
import FinishImage from '../../images/icons/Finish.svg'



const Main = () => {

    return (
        <div className="main">
            <div className="container">
                <div className="main__inner">
                    <div className="main__img">
                        <img className="img" src={MainImgaes} alt="" />
                    </div>

                    <div className="main__content">
                        <h1 className="main__title">Сайт для скорость чтение и чтение по таймеру</h1>
                        <a className="btn" href="google.com">Get started</a>
                    </div>
                </div>

                <img className="img finish__img" src={FinishImage} alt="" />
            </div>
        </div>
    );
    
}

export default Main;