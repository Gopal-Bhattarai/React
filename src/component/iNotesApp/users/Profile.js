import React, { useEffect, useContext } from 'react'
import NoteContext from '../context/NoteContext';
import UserContext from '../context/UserContext';

const Profile = () => {
    
    const {showAlert} = useContext(NoteContext);
    const {getUser, setUser, user, updateUserProfile} = useContext(UserContext)

    useEffect(()=>{
        console.log('useEffect hook used to fetch data');
        getUser();
    },[])

    const onChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(user.password!==user.confirmpassword) {
            return showAlert('Password mismatched','danger');
          }
        
          await updateUserProfile(user.id, user.fullName, user.password);
          showAlert('Profile updated successfully', 'success')
          await getUser();
    }
    const activeDate = new Date(user.createdAt);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


  return (
    <div className='container'>
      <h1>Your Profile Page</h1>
      <form className='my-3' onSubmit={handleSubmit}>
            <div className="my-3">
            <span className='badge rounded-pill bg-danger'>{user.role===1?'Admin':''}</span> 
            </div>
            <div className="my-3">
                <span className='badge rounded-pill bg-success'>MongoDB ID : {user.id}</span> 
                <span className='badge rounded-pill bg-secondary'>Active Since: {activeDate.getDate()+'.'+month[activeDate.getMonth()] +' - '+ activeDate.getFullYear() }</span> 
            </div>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" name="fullName"  value={user.fullName} onChange={onChange} minLength={3} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={onChange} minLength={10} required readOnly/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={onChange} minLength={6} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" value={user.confirmpassword} onChange={onChange} minLength={6} required />
            </div>
            <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
    </div>
  )
}

export default Profile
