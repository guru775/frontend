import React from 'react';
import { useState, useEffect } from 'react';
import pin from "./Assets/pin.png"
import heart from "./Assets/heart.png";
import dots from "./Assets/dots.png";
import send from "./Assets/send.png";
import comment from "./Assets/comment.png"
import camera from "./Assets/camera.png"
import logo from "./Assets/verified.png"
import { Link } from 'react-router-dom';
import "./style/style.css"
function Postview() {
    let [data, setData] = useState([])
    data.sort()
    useEffect(() => {
        fetch('https://backendinstaclone-qwa4.onrender.com/getPost')
            .then((e) => (e.json()))
            .then((ele) => {
                ele.reverse();
                setData(ele)})
            .catch((err) => console.log(err))
    }, [])
  return (
    <div id='postview'>
        <header>
            <div id='logo-name'>
               <div >
                <img src={logo} alt='logo' id='img'/>
               </div>
               <div id='name'>
                <h1>Instaclone</h1>
               </div>
                
            </div>
            <div>
               <Link to="/newPost"> <img id='cam' src={camera} alt='post-button'/></Link>
            </div>
        </header>
        <main>
         {data.map((e, index) => {
                    return (
                        <div key={index} className="card">
                            <section id='header'>
                                <div id='name_location'>
                                   <h3>{e.name}</h3>
                                   <div id='loc'>
                                   <img src={pin} alt="location"/>
                                   <h5>{e.location}</h5>
                                   </div>
                                </div>
                                <div id='dots'>
                                    <img src={dots} alt="options"/>
                                </div>
                            </section>
                            <section id='main-sec'>
                                 <img src={e.PostImage} alt='content-image'/>
                            </section>
                            <section id='footer'>
                               <div id='wish-area'>
                                 <div id='likes'>
                                    <img src={heart} alt='likes'/>
                                    <img src={comment} alt='comment'/>
                                    <img src={send} alt='send'/>
                                    
                                 </div>
                                 <div id='rest'>
                                 <p>{e.likes} likes</p>
                                 </div>
                               </div>
                               <div id='date'>
                                <p>{e.date}</p>
                               </div>
                            </section>
                            <section id='description'>
                               <h3>{e.name}</h3>
                               <h5>{e.description}</h5>
                            </section>
                        </div>

                    )
                })}
</main>
    </div>
  )
}

export default Postview