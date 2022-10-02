import './App.css';
import {useState} from "react";

import {Users, Posts} from "./components";
import {postService} from "./services";


function App() {

  let [posts,setPosts] = useState([]);

const getPostById = (userId) => {
  postService.getPosts(userId).then(({data})=> setPosts(data));
}

  return (
    <div className="App">
      {/*Отримати всіх користувачів з jsonplaceholder, вивести їх.*/}
      {/*Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті
      з'являються всі пости поточного користувача*/}
      {/*Запити робити через axios, організація коду через сервіси*/}
    <Users getPostById={getPostById}/>
    <Posts posts={posts}/>


    </div>
  );
}

export default App;
