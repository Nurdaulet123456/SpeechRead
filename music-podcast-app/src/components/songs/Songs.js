// CSS

import './Songs.css'

// Import Other Files


const Songs = () => {
    return (
        <div className="songs">
            <h1 className="songs__title">Songs</h1>
            <div className="albums__block">
                <div className="block">
                    <img className='img' src="https://via.placeholder.com/200x200" alt="" />
                    <h4 className="songs__name">Neffex</h4>
                    <p>Cold</p>
                </div>

                <div className="block">
                    <img className='img' src="https://via.placeholder.com/200x200" alt="" />
                    <h4 className="songs__name">Neffex</h4>
                    <p>Cold</p>
                </div>

                <div className="block">
                    <img className='img' src="https://via.placeholder.com/200x200" alt="" />
                    <h4 className="songs__name">Neffex</h4>
                    <p>Cold</p>
                </div>

                <div className="block">
                    <img className='img' src="https://via.placeholder.com/200x200" alt="" />
                    <h4 className="songs__name">Neffex</h4>
                    <p>Cold</p>
                </div>
            </div>

            <div className="musics">
                 <div className="music__img">
                    <img className='img' src="https://via.placeholder.com/45x45" alt="" />
                    <h3>01</h3>
                 </div>
                 <p>Faded-Alan Walker</p>
                 <p>Single Album</p>
                 <p>4:17</p>
            </div>
            
            <div className="musics">
                 <div className="music__img">
                    <img className='img' src="https://via.placeholder.com/45x45" alt="" />
                    <h3>01</h3>
                 </div>
                 <p>Faded-Alan Walker</p>
                 <p>Single Album</p>
                 <p>4:17</p>
            </div>
            <div className="musics">
                 <div className="music__img">
                    <img className='img' src="https://via.placeholder.com/45x45" alt="" />
                    <h3>01</h3>
                 </div>
                 <p>Faded-Alan Walker</p>
                 <p>Single Album</p>
                 <p>4:17</p>
            </div>
        </div>
    );
}  

export default Songs