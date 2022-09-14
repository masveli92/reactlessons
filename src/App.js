import './App.css';
import {rickAndMorty} from "./data";
import RickAndMorty from "./components/RickAndMorty";
import SimpsCard from "./components/SimpsCard";

function App() {
    return (
        <div className="App">
            {/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/}
            <h2 className='header'> Simpsons family </h2>
                <SimpsCard/>

            {/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі*/}
            {/*https://rickandmortyapi.com/*/}
            {/*https://rickandmortyapi.com/api/character*/}
            {/*Створити 6 персонажів*/}

            <h2 className='header'> Rick and Morty </h2>
                {rickAndMorty.map(character=> (<RickAndMorty value = {character} key = {character.id}/>))}

        </div>
    );
}
export default App;
