
import airbnbLogo from './images/airbnb-logo.png'
import airbnb from './images/airbnb-1.png'


export default function Nav() {
    return (
<div className="App">

            <div className='navbar'>
                <img src={airbnbLogo} className="logo-airbnb" alt="" />
                <img src={airbnb} alt='' className='grid-image'/>
            </div>

            <h1>Padera</h1>
            <div className="card">
                
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p>
            </div>
            <p className="read-the-docs">
            Click on the Vite and React logos to learn more
            </p>
</div>



    )
}