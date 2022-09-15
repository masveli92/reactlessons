import RickAndMorty from "./RickAndMorty";
import {useState} from "react";

export default function RMCard() {
    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.splice(0,6));
        });

return(<div className= 'rmBlock'>
         {
             characters.map(value=> (<RickAndMorty value= {value} key = {value.id}/>))
         }
         </div>
);

}