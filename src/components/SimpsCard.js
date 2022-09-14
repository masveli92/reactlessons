import Simpsons from "./Simpsons";

export default function SimpsCard() {
      return (
        <div className="simpsonsBlock">
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
        </div>
    );
}