// import React from "react"
import abiton from './abiton.jpeg';
import './App.css';

export default function Header(){
   
    return (
        <div className="App">
          <header className="App-header">
            <img src={abiton} className="App-logo" alt="logo" />
            <p>
              Putting this learning to good use
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}

// return (
//     <div className="header">
//         <nav className="personal-info">
//             <img src="./img/abiton.jpeg"/>
//             <h1 className="name">Abiton Padera</h1>
//             <p className="title">Front End Developer</p>
//             <p className="email"> abitondev@gmail.com</p>
//         </nav>
        
//         <div className="contacts">
//             <button className="email-btn">
//             <i className="fa-solid fa-envelope"></i>
//            <span> Email </span> </button>
//             <button className="linked-btn">
//             <i className="fa-brands fa-linkedin"></i>
//             <span>Linked</span> </button>
//         </div>
           
//     </div>
// )