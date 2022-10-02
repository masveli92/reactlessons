function User ({user, getPostById}) {
    return(
        <div className='userField'>
            <h3 className='userData'> {user.id} - {user.name}  </h3>
            <button className= "postsButton" onClick={() => getPostById (user.id)}> User posts </button>
        </div>
    )
}
export {User};