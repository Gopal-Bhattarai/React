import UserContext from './UserContext'
import { useState } from 'react'


const UserState = (props) => {

  const urlHost = process.env.REACT_APP_HOST;
  
    const [firstName, setFirstName] = useState('');
    //profile picture URL Src
    const [file, setFile] = useState('')

    const [user, setUser] = useState({
        id: '',
        fullName: '',
        email: '',
        password: '',
        confirmpassword:'',
        createdAt: '',
        role: 0,
        avatar:''
    });

    const getUser = (async () => {
        if(localStorage.getItem('token')) {
            const response = await fetch(`${urlHost}/api/users/getuser`,{
                method: 'POST',
                headers: {
                'Content-Type' : 'application/json',
                "auth-token": localStorage.getItem('token')
                },
            })
            const json = await response.json();
            setUser({
                id: json._id,
                fullName: json.fullName,
                email: json.email,
                password: '',
                confirmpassword:'',
                createdAt: json.createdAt,
                role: json.role,
                avatar: json.avatar
            })
            const fName = json.fullName.split(" ");
            setFirstName(fName[0])
            const userid = json._id;
            setFile(`${urlHost}/images/${userid}/${json.avatar}`);
    
        }
    });


    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const response = await fetch(`${urlHost}/api/admin/allUsers`, {
            method: 'POST',
            headers:{
                "Content-Type" :"application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const jsonUsers = await response.json();
        //console.log(jsonUsers);
        setUsers(jsonUsers)
    }

    const updateUserProfile = async (id,fullName,password) => {
        const response = await fetch(`${urlHost}/api/users/updateuser/${id}`,{
            method: 'PUT',
            headers: {
              'Content-Type' : 'application/json',
              "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({fullName, password})
          });
          await response.json();
    }

    //Delete a User
    const deleteUser = async (id)=> {
    try {
      const response = await fetch(`${urlHost}/api/admin/deleteUser/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type' : 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json();
      setUsers(users.filter(user=>user._id!==id))
      console.log(json);
      getUser();
    } catch (error) {
      console.log(error.message);
    }
  }



    return (
        <div>
            <UserContext.Provider value={{firstName, getUser, user, setUser, updateUserProfile, deleteUser, users, getAllUsers, file, setFile, urlHost}}>
                {props.children}
            </UserContext.Provider>
        </div>
      )

}



export default UserState