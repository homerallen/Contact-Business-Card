import React from 'react'

export default function Info(){
    return (
        <div>
            <img className="image" src="../card/img/me.jpeg" />
            <h1>Homer Allen</h1>
            <span>Developer</span>
            <a href="http://www.homerallen.com" className="website">homerallen.com</a>
            <button onClick={() => window.location = 'mailto:homer@homerallen.com'}><img className="img-email" src="../card/img/Icon.png" />  Email</button>
        </div>
    )
}