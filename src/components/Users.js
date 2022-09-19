import {useEffect, useState} from "react";
import User from "./User";

function Users(){
    let [users, setUsers]=useState([]);
    let [user, setUser]= useState(null);

    const lift = (user)=>{
        setUser(user);
    }

    useEffect( ()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        },[]
    )
   return (
       <div className='usersBox'>
           <div className='usersList'>
               <h2 className='userHeader'> User list: </h2>
               {users.map(user=> (<User key={user.id} user ={user} lift = {lift} />))}
           </div>

           <div className='userBox'>
               <h2 className='userInfoHeader'> Info about choozen user: </h2>
                    <ul className='userList'>
                        <li className='infoField'>{user?.name}</li>
                        <li className='infoField'>{user?.username}</li>
                        <li className='infoField'>{user?.email}</li>
                        <li className='infoField'>{user?.phone}</li>
                        <li className='infoField'>{user?.website}</li>
                    </ul>
           </div>
      </div>

   )
}
export default Users

