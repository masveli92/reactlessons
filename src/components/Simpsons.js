export default function Simpsons(props) {
    let {simpsonName, simpsonPic} = props;
    let simpsonMember = 'simpsonCard';
    return (
        <div className={simpsonMember}>
            <h2 className="simpsonName"> {simpsonName} </h2>
            <img src={simpsonPic} alt={"simpson"} className="simpsonPic"/>
        </div>
    );
}