// CSS
import './Main.css'
import '../../index.css'

// Other Files and Hooks

import SideBar from '../sideBar/SideBar'
import Songs from '../songs/Songs'

function Main() {
    return (
        <div className='main'>
            <div className="container">
                 <div className="main__inner">
                    <SideBar />
                    <Songs />
                 </div>
            </div>
        </div>        
    )
}

export default Main