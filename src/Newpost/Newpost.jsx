import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Style/style.css"

function Newpost() {
      const Navigate = useNavigate();
    const event = async (e) => {
        alert("Please wait for few seconds")
        e.preventDefault()
        let view=e.target
        console.log(view)
        let formData = new FormData(view)
        console.log(formData)
        await fetch('https://backendinstaclone-qwa4.onrender.com/createPost', {
            method: 'POST',
           
            body: formData
        })
            .then(res => res.json())
            .then((d) => {
                alert("Successfully posted")
                console.log(d);
            })
            .catch((e) => { console.log(e.message) }).finally(()=>Navigate('/post'))

    }


  return (
    <div id='all'>
        <h1>Fill all details</h1>
        <form onSubmit={(e) => event(e)}>
        <label htmlFor="name">
          Name
        </label>
        <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            required
          />
        <label htmlFor="location">
            Location
         
        </label>
        <input
            type="text"
            placeholder="location"
            name="location"
            id="location"
            required
          />
        <label htmlFor="description">Description
          
        </label>
        <input
            type="text"
            placeholder="what do you think..."
            name="description"
            id="description"
            required
          />
        <label htmlFor="image" >
            Image
         
        </label>
        <input type="file"  name="PostImage" id="image" required />
        <button>submit</button>

        </form>
    </div>
  )
}

export default Newpost