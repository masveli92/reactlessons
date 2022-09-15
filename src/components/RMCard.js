import {rickAndMorty} from "../data";
import RickAndMorty from "./RickAndMorty";

export default function RMCard(){
    return(
        <div className= 'rmBlock'>
            {rickAndMorty.map(character=> (<RickAndMorty value = {character} key={character.id}/>))}
        </div>
    )
}