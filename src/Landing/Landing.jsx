import React from 'react'
import globe from "./Assets/globe.png" 
import logo from "./Assets/Instaclone.png"
import "./styles/style.css"
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <main id='landing-page'>
       <div>
        <img src={logo} alt='logo' id='logo_img'/>
        </div>
        <div>
        <img id='spinning_globe' src={globe} alt='globe'/>
        </div>
        <div>
        <p>connecting people</p>
        <button><Link to='/post'>enter</Link></button>
        </div>
    </main>
  )
}

export default Landing