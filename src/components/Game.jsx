import React from 'react';
import { Link } from 'react-router-dom';

const Game =(props)=> {
    
    return (
        <div className="gameWrapper" id={props.key}>
            <h1>{props.name}</h1>

            <Link to={`/games/${props.id}`}>
            <div className="imagePreview" style={{backgroundImage: `url(${props.image})`}}>
            </div>
            </Link>

            <p className="gameDetails">
                <b>Rating:</b> {props.rating}
            </p>
            <div className="detailsX">
                <div className="dots"><Link to={`/games/${props.id}`}>•••</Link></div>
                <button className="xButton" onClick={()=> props.deleteGame(props.id)}>🆇</button>
            </div>

        </div>
    )
}

export default Game


