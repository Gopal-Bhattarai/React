import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import NoteContext from "../context/NoteContext";
import UserContext from "../context/UserContext";

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const {showAlert} = useContext(NoteContext);
  const {getUser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password!==confirmpassword) {
      return setErrorMsg('Password mismatched');
    }
      try {
        const response = await fetch(`http://localhost:8000/api/users/signup`,{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({fullName, email, password})
        })
        const json = await response.json();
        if(json.status===true) {
          console.log(json.authtoken);  
          localStorage.setItem('token', json.authtoken)  
          navigate('/inotes');
          showAlert('Signup successfully & Logged in','success')
          getUser();
        } else {
         setErrorMsg(json.Error)
         console.log(json);
        }
      } catch (error) {
        console.log(error.message)
      }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign up to start using this app </h1>
        <div className="my-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" aria-describedby="emailHelp" value={fullName} onChange={(e)=>setFullName(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password"  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmpassword"  value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
        </div>
        <div id="emailHelp" className="form-text">{errorMsg}</div>
        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
    </div>
  )
}

export default Signup
