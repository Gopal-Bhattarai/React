import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import parse from 'html-react-parser';
import { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import UserContext from '../context/UserContext';
import '../css/style.css'

const UserItem = ({user}) => {
  const {keywords, setTotalKeywords} = useContext(NoteContext);
  const {deleteUser, urlHost} = useContext(UserContext);

  let fullName = user.fullName;
  let email = user.email;
  let userImg = `${urlHost}/images/${user._id}/${user.avatar}`;
  
  if(keywords!=="") {
    fullName = user.fullName.toLowerCase().replace(keywords.toLowerCase(),`<span className="highlight"><b>${keywords}</b></span>`);
    email = user.email.toLowerCase().replace(keywords.toLowerCase(),`<span className="highlight"><b>${keywords}</b></span>`);

    const count = document.querySelectorAll('.highlight').length>0? document.querySelectorAll('.highlight').length + ' records found' : void 0;
    setTotalKeywords(count);
  } else {
    setTotalKeywords('');
  }

  return (
    <>
    <div className="card d-flex flex-row">
      <div className="col-sm-3">
      <img className="dbUserPic m-2" src={userImg} />
      </div>
      <div className="card-body col-sm-7">
        <h5 className="card-title display-3">{parse(fullName)}</h5>
        <p className="card-text display-6">{parse(email)}</p>
        <p className="card-text my-0">
          <small>Role: {user.role===1? parse('<span className="badge rounded-pill bg-danger">Admin</span>') :'User'}</small><br />
          {user.role!==1? <small>MongoDB ID: {user._id} </small> : '' }
        </p>
      </div>
        <div className="col-sm-2 d-flex justify-content-end">
          <div>
          {user.role!==1 ?
          <p className="btn btn-sm btn-light"
            onClick={() => deleteUser(user._id)} >
            <RiDeleteBin6Line color={"red"} size={30}/>
          </p> : void 0}
          </div>
        </div>
    </div>
    </>
  );
};

export default UserItem;
