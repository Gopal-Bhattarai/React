import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from './context/NoteContext';
import UserContext from './context/UserContext';
import ManageNoteitem from './ManageNoteitem';


const ManageNotes = () => {
    const {notes, getNotes} = useContext(NoteContext);
    const {getUser, urlHost} = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(()=>{
      localStorage.getItem('token') ? getNotes(`${urlHost}/api/admin/allnotes`) : navigate("/inotes/login")
      getUser();
        //eslint-disable-next-line
    },[])
    
   return (
        <>    
        <div className="row my-4">
        <h1>All Notes...</h1>
        {notes.length===0 && <div className='card m-3'><h5>No Notes to display</h5></div>}
        {notes.map(note=>{
            return (
            <ManageNoteitem note={note} key={note._id}/>
            )
        })}
        </div>
        </>
      )
    }
export default ManageNotes
