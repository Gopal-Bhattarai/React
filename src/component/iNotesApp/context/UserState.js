import UserContext from './UserContext'
import { useState } from 'react'

const UserState = (props) => {

    const [firstName, setFirstName] = useState('');
    const [user, setUser] = useState({
        id: '',
        fullName: '',
        email: '',
        password: '',
        confirmpassword:'',
        createdAt: ''
    });

    const getUser = (async () => {
        if(localStorage.getItem('token')) {
            const response = await fetch(`http://localhost:8000/api/users/getuser`,{
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
                createdAt: json.createdAt
            })
            const fName = json.fullName.split(" ");
            setFirstName(fName[0])
        }
    });

    const updateUserProfile = async (id,fullName,password) => {
        const response = await fetch(`http://localhost:8000/api/users/updateuser/${id}`,{
            method: 'PUT',
            headers: {
              'Content-Type' : 'application/json',
              "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({fullName, password})
          });
          await response.json();
    }

    return (
        <div>
            <UserContext.Provider value={{firstName, getUser, user, setUser, updateUserProfile}}>
                {props.children}
            </UserContext.Provider>
        </div>
      )

}



export default UserState