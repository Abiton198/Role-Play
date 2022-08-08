
import airbnbLogo from './images/airbnb-logo.png'
import airbnb from './images/airbnb-1.png'
import Data from './Data'


export default function Nav() {
    return (
<div className="App">

            <div className='navbar'>
                <img src={airbnbLogo} className="logo-airbnb" alt="" />
                <img src={airbnb} alt='' className='grid-image'/>
            </div>
        
</div>

    )
}