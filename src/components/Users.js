import {useEffect, useState} from "react";

import {getUsers} from "../services";
import {User} from "./User";

function Users({getPostById}){
    let [users, setUsers]=useState([]);

    useEffect( ()=>{
        getUsers().then(value => { setUsers (value.data)});

        },[]
    )
   return (
       <div className='usersBox'>
           <div className='usersList'>
               <h2 className='userHeader'> User list: </h2>
               {users.map(user=> (<User key={user.id} user ={user} getPostById={getPostById}/>))}
           </div>
       </div>

   )
}
export {Users}

