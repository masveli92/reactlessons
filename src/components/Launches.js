import {useEffect, useState} from "react";
import Launch from "./Launch";

function Launches(){
    let [launches, setLaunches] = useState([]);

    useEffect( ()=>{
            fetch('https://api.spacexdata.com/v3/launches/')
                .then(value => value.json())
                .then(value => {
                    setLaunches(value);
                });
        },[]
    )

    return(
        <div className='launches'>
            {launches.filter(value => value.launch_year !== '2020').map((value,index) => (<Launch key={index} value={value}/>))}
        </div>
    )

}
export default Launches;