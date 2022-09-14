export default function RickAndMorty(props) {
    let {value:character} = props;
    return (
        <div className= 'rmCard'>
            <h2 className='rmCardTitle'>{character.id} - {character.name}</h2>
            <ul className='rmCardUl'>
                <li className='rmCardList'>{character.status}</li>
                <li className='rmCardList'>{character.species}</li>
                <li className='rmCardList'>{character.gender}</li>
            </ul>
            <img src={character.image} alt={"character"} className='rmCardPic'/>
        </div>)
}