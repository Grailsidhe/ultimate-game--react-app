import React from 'react';
import Game from "./Game";
import axios from "axios";
import {useEffect, useState} from "react"

const GameList =()=> {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(false);

    useEffect(()=>{
        axios.get("https://apis.wilders.dev/wild-games/games/")
        .then((response) => {setData(response.data); console.log(response.data)})
        .catch((error) => console.log(error))
    }, [])

    const handleFilter =()=>{
        setFilter(!filter)
    }

    const deleteGame = ((id)=>{
        setData(data.filter((game) => game.id !== id))
      })

    return (
    <div className="gameListContainer">
        <button className="filterButton" onClick={handleFilter}><b>Rating:</b> {filter ? "Highest" : "All"}</button>
        <div className="gameListWrapper">
            {data
            .filter((game)=>{
            return !filter || Number(game.rating) >= 4.5
            })
            .map((game, key) => {
                return (
                    <div className="1">
                        <Game 
                            key={key} 
                            id={game.id}
                            name={game.name} 
                            released={game.released} 
                            rating={game.rating}
                            image={game.background_image}
                            deleteGame={deleteGame}
                        />
                    </div>
                )
            })}
            
        </div>
    </div>
    )
}

export default GameList