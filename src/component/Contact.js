import React, { useState } from 'react'
// import styled from 'styled-components'
import {toast} from 'react-toastify'

// const StyledDiv = styled.div`
// display: flex;
// flex-direction: column;
// /* font-size: 30px; */
// align-items: center;
// margin: 50px auto;
// min-width: 500px;
// padding: 20px 30px;
// border: 1px solid black;
// border-radius: 10px;
// box-shadow: 0 0 10px 2px gray;
// `;

// const StyledContact = styled.p`
// font-size: 40px;
// font-weight: 600;
// text-align: left;
// font-variant-caps: small-caps;
// width: 100%;
// border-bottom: 2px solid black;
// `;

const Contact = () => {
  const [email,setEmail]=useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody]= useState('');
   
  const handleSend = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:8000/sendEmail', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email, subject, body})
      })
      const json = await response.json();
      response.ok ? toast.success(json.mssg) : toast.warn("Error: Unable to send")
      setEmail('')
      setSubject('')
      setBody('')
  }
  return (
    <div className="container">
    <div className='card rounded m-3 shadow p-5'>
      <h5 className="card-title">Express your concern!</h5>
      <form>
      <div className="form-group row">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control"  placeholder="Enter recipient's email address..." />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        <input value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" className="form-control mt-2"  placeholder="Subject..." />
        <textarea value={body} onChange={(e)=>setBody(e.target.value)} className='form-control mt-3' placeholder='your message goes here...'></textarea>

        <button className='btn btn-primary mt-3' onClick={handleSend}>Send</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Contact
