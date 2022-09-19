function Launch ({value}) {

    return(

        <div className='launch'>
            <h3 className='launchName'> {value.mission_name} </h3>
            <img src={value.links.mission_patch_small} alt={"picture"} className='picture'/>
            <h3 className='launchYear'> {value.launch_year}</h3>
        </div>
    )
}
export default Launch;