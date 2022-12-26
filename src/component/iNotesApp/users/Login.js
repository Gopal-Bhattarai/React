import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import NoteContext from '../context/NoteContext'
import UserContext from "../context/UserContext";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const {showAlert} = useContext(NoteContext)
  const {getUser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await fetch(`http://localhost:8000/api/users/login`,{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({email, password})
        })
        const json = await response.json();
        if(json.status===true) {
          localStorage.setItem('token', json.authtoken)  
          localStorage.setItem('email', email)
          getUser();
          navigate('/inotes');
         showAlert('Your are logged in','success')
        } else {
         setErrorMsg(json.Error)
         showAlert('Invalid Credentials','danger')
        }
      } catch (error) {
        console.log(error.message)
      }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login to continue</h1>
        <div className="my-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <div id="emailHelp" className="form-text">{errorMsg}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password"  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
