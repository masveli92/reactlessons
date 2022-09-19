function User ({user, lift}) {

    return(
        <div className='userField'>
            <h3 className='userData'> {user.id} - {user.name}  </h3>
            <button className= "infoButton" onClick={()=>{
                lift(user);
            }}> Info </button>
        </div>
    )
}
export default User;