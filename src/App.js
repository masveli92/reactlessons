import './App.css';
import SimpsCard from "./components/SimpsCard";
import RMCard from "./components/RMCard";

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
                <RMCard/>
        </div>
    );
}

export default App;
