import React, { useContext, useEffect, useState } from 'react'
import UserItem from './UserItem';
import UserContext from '../context/UserContext';
import NoteContext from '../context/NoteContext';

const Users = () => {

    const {getUser, users, getAllUsers} = useContext(UserContext);
    const {totalKeywords} = useContext(NoteContext);

    useEffect(()=>{
        getAllUsers();
        getUser();
    },[])

  return (
    <div>
        <h1>Users Database</h1>
        <div className='mx-3'>{totalKeywords}</div>
        {users && users.map(user=>{
            return (
            <div className="container" key={user._id}>
                <UserItem user={user} />
            </div>
            )
        })}
    </div>
  )
}

export default Users
