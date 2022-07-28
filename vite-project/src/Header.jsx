import React from "react"

export default function Header(){
    return (
        <div className="header">
            <nav className="personal-info">
                <img src="./img/abiton.jpeg"/>
                <h1 className="name">Abiton Padera</h1>
                <p className="title">Front End Developer</p>
                <p className="email">abitondev@gmail.com</p>
            </nav>
            
            <div className="contacts">
                <button className="email-btn">Email</button>
                <button className="linked-btn"><span>in </span>Linked</button>
            </div>
               
        </div>
    )
    
}