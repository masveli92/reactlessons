import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layoutes/MainLayout";
import {AlbumsPage, CommentsPage, PostsPage, TodosPage} from "./pages";

function App() {

  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            {/*<Route index element={<Navigate to={'home'}/>}/>*/}
            {/*<Route path ={''} element={}/>*/}
            <Route path ={'/todos'} element={<TodosPage/>}/>
            <Route path ={'/albums'} element={<AlbumsPage/>}/>
            <Route path ={'/comments'} element={<CommentsPage/>}>
                <Route path={':posts'} element={<PostsPage/>}/>
            </Route>
        </Route>
    </Routes>
  );
}
export default App;

{/*реалізувати 3 маршрути*/}
{/*todos - при переході на який тягнуться всі todos з https://jsonplaceholder.typicode.com/todos*/}

{/*albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums*/}

{/*comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments*/}
{/*при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости.
        приклад запиту https://jsonplaceholder.typicode.com/posts/ID*/}
{/*id поста взяти з коментаря (postId)*/}

{/*відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.*/}