import './App.css';
import Simpsons from "./components/Simpsons";
import {rickAndMorty} from "./data";
import RickAndMorty from "./components/RickAndMorty";

function App() {
    return (

        <div className="App">
            {/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/}
            <h2 className='header'> Simpsons family </h2>
            <Simpsons
                simpsonName={'Bart'}
                simpsonPic={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            />
            <Simpsons
                simpsonName={'Homer'}
                simpsonPic={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            />
            <Simpsons
                simpsonName={'Marge'}
                simpsonPic={'https://www.freeiconspng.com/thumbs/marge-simpson-png/marge-simpson-png-3.png'}
            />
            <Simpsons
                simpsonName={'Lisa'}
                simpsonPic={'https://upload.wikimedia.org/wikipedia/sco/e/ec/Lisa_Simpson.png'}
            />
            <Simpsons
                simpsonName={'Maggie'}
                simpsonPic={'https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png'}
            />

            {/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі*/}
            {/*https://rickandmortyapi.com/*/}
            {/*https://rickandmortyapi.com/api/character*/}
            {/*Створити 6 персонажів*/}

            <h2 className='header'> Rick and Morty </h2>
            {rickAndMorty.map(character=> (<RickAndMorty value = {character}/>))}
        </div>
    );
}

export default App;
