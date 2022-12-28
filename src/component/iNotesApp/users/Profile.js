import React, { useEffect, useContext, useRef, useState } from 'react'
import NoteContext from '../context/NoteContext';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    
    const {showAlert} = useContext(NoteContext);
    const {getUser, setUser, user, file, setFile, updateUserProfile, urlHost} = useContext(UserContext)
    const refAvatar = useRef(null);
    const navigate = useNavigate();

    
    useEffect(()=>{
        (!localStorage.getItem('token')) ? navigate("/inotes/login") : void 0;
        getUser();
        console.log('useEffect hook used to fetch data');
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

    const handlePicClick = () => {
        refAvatar?.current.click()
    }
    const handleChange = async (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        const formData = new FormData();
        formData.append("avatar", e.target.files[0])

        const response = await fetch(`${urlHost}/api/users/avatar`, {
            method: 'POST',
            headers: {
                "auth-token" : localStorage.getItem('token')
            },
            body: formData
        })
    }

  return (
    <div className='container'>
      <h1>Your Profile Page</h1>
      <form className='my-3' onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div className="row">
        <div className="col-sm-6">
            <div className="my-3">
            <span className='badge rounded-pill bg-danger'>{user.role===1?'Admin':''}</span> 
            </div>
            <div className="my-3">
                <span className='badge rounded-pill bg-success'>MongoDB ID : {user.id}</span> 
                <span className='badge rounded-pill bg-secondary'>Active Since: {activeDate.getDate()+'.'+month[activeDate.getMonth()] +' - '+ activeDate.getFullYear() }</span> 
            </div>
        </div>
        <div className="col-sm-6 d-flex justify-content-end" >
             <input type="file" id="avatar" name="avatar" ref={refAvatar} className='d-none' onChange={handleChange}/>
            {file && <img className = "dbUserPic" src={file} alt="Profile Picture" onClick={handlePicClick}/>}
        </div>
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
