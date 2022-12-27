import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import NoteContext from "./context/NoteContext"
import { useContext } from "react"
import parse from 'html-react-parser';
import './css/style.css'

const ManageNoteitem = ({note: notes}) => {
  const {deleteAllNote, keywords : kw} = useContext(NoteContext);

  let afullName = notes.user.fullName;
  let aTitle = notes.title;
  let aDescription = notes.description;
  let aTag = notes.tag;


  
  if(kw!=="") {
    notes.user.fullName ? 
    afullName = notes.user.fullName.toLowerCase().replace(kw.toLowerCase(),`<span className="highlight"><b>${kw}</b></span>`)
    : void 0;
    aTitle = notes.title.toLowerCase().replace(kw.toLowerCase(),`<span className="highlight"><b>${kw}</b></span>`)
    aDescription = notes.description.toLowerCase().replace(kw.toLowerCase(),`<span className="highlight"><b>${kw}</b></span>`)
    aTag = notes.tag.toLowerCase().replace(kw.toLowerCase(),`<span className="highlight"><b>${kw}</b></span>`)
  }
  return (
    <>
    { 
    
    (kw &&  notes.user.fullName.toLowerCase().includes(kw.toLowerCase())
    || notes.title.toLowerCase().includes(kw.toLowerCase()) 
    || notes.description.toLowerCase().includes(kw.toLowerCase()) 
    || notes.tag.toLowerCase().includes(kw.toLowerCase()) )
    
    ? 
      
    <div className="col-md-4">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{parse(aTitle)}</h5>
            <span className='d-flex justify-content-end'><p className='badge rounded-pill bg-primary'> {afullName ? parse(afullName) : void 0}</p></span>
            <p className="card-text">{parse(aDescription)}</p>
            <p className="card-text my-0"><small>TAG: {parse(aTag)}</small></p>
            <div className="d-flex justify-content-between">
            <p className="btn btn-sm btn-light" ><BiEdit color={"navy"} /></p>
            <p className="btn btn-sm btn-light" onClick={()=>deleteAllNote(notes._id)}><RiDeleteBin6Line color={"red"} /></p>
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
