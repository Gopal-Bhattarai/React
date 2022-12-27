import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import NoteContext from "./context/NoteContext"
import { useContext } from "react"
import parse from 'html-react-parser';
import './css/style.css'

const ManageNoteitem = ({note, updateNote}) => {
  const {deleteAllNote, keywords} = useContext(NoteContext);

  let sfullName = note.user.fullName;
  let sTitle = note.title;
  let sDescription = note.description;
  let sTag = note.tag;


  
  if(keywords!=="") {
    // const newStatus = status.replace(/`${k}`/g,`<span class="badge danger">${k}</span>`);
    sfullName = note.user.fullName.toLowerCase().replace(keywords.toLowerCase(),`<span className="highlight"><b>${keywords}</b></span>`)
    sTitle = note.title.toLowerCase().replace(keywords.toLowerCase(),`<span className="highlight"><b>${keywords}</b></span>`)
    sDescription = note.description.toLowerCase().replace(keywords.toLowerCase(),`<span className="highlight"><b>${keywords}</b></span>`)
    sTag = note.tag.toLowerCase().replace(keywords.toLowerCase(),`<span className="highlight"><b>${keywords}</b></span>`)
  }
  return (
    <>
    { 
    
    (  note.user.fullName.toLowerCase().includes(keywords.toLowerCase())
    || note.title.toLowerCase().includes(keywords.toLowerCase()) 
    || note.description.toLowerCase().includes(keywords.toLowerCase()) 
    || note.tag.toLowerCase().includes(keywords.toLowerCase()) )
    
    ? 
      
    <div className="col-md-4">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{parse(sTitle)}</h5>
            <span className='d-flex justify-content-end'><p className='badge rounded-pill bg-primary'>{parse(sfullName)}</p></span>
            <p className="card-text">{parse(sDescription)}</p>
            <p className="card-text my-0"><small>TAG: {parse(sTag)}</small></p>
            <div className="d-flex justify-content-between">
            <p className="btn btn-sm btn-light" onClick={()=>updateNote(note)}><BiEdit color={"navy"} /></p>
            <p className="btn btn-sm btn-light" onClick={()=>deleteAllNote(note._id)}><RiDeleteBin6Line color={"red"} /></p>
            </div>
        </div>
        </div>
    </div>

    : void 0
  } 
  </>
  )
}

export default ManageNoteitem
