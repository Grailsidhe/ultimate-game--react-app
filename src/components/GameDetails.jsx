import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react"

const GameDetails =(props)=> {

    const [data, setData] = useState([]);
    const [image, setImage] = useState(0);


    useEffect(()=>{
        axios.get("https://apis.wilders.dev/wild-games/games/")
        .then((response) => {setData(response.data); console.log(response.data)})
        .catch((error) => console.log(error))
    }, [])


    const params = props.match.params;
    const nums = [1, 2, 3, 4, 5, 6]

    return (
        <div className="gameDetailsWrapper">

            {data
            .filter((game) => {
               return game.id == params.id
            })
            .map((game) => {

                const genres = ()=> { if(game.genres[2]){
                    return `${game.genres[0].name}, ${game.genres[1].name}, ${game.genres[2].name}`
                } else if(game.genres[1]){
                    return `${game.genres[0].name}, ${game.genres[1].name}`
                } else {
                    return `${game.genres[0].name}`
                }}

                return (
                    <div>
                        <div className="detailBody">
                            <div className="detailImageBox" style={{backgroundImage: `url(${game.short_screenshots[`${image}`].image})`}}>
                                <div className="detailData">
                                    <h1 className="gameTitle">{game.name}</h1>
                                    <span><b>Rating:</b> {game.rating}</span><br />
                                    <span><b>Release:</b> {game.released}</span><br />
                                    <span><b>Genres:</b> {genres()}</span>
                                </div>
                            </div>
                            <hr />
                            <div className="gallery">
                                {nums.map((i) => <img onClick={()=>image !== i ? setImage(i) : image} className="detailImage" src={game.short_screenshots[i].image} alt={game.name} />)}
                                {/*
                                <img onClick={()=>image !== 1 ? setImage(1) : image} className="detailImage" src={game.short_screenshots[1].image} alt={game.name} />
                                <img onClick={()=>image !== 2 ? setImage(2) : image} className="detailImage" src={game.short_screenshots[2].image} alt={game.name} />
                                <img onClick={()=>image !== 3 ? setImage(3) : image} className="detailImage" src={game.short_screenshots[3].image} alt={game.name} />
                                <img onClick={()=>image !== 4 ? setImage(4) : image} className="detailImage" src={game.short_screenshots[4].image} alt={game.name} />
                                <img onClick={()=>image !== 5 ? setImage(5) : image} className="detailImage" src={game.short_screenshots[5].image} alt={game.name} />
                                <img onClick={()=>image !== 6 ? setImage(6) : image} className="detailImage" src={game.short_screenshots[6].image} alt={game.name} />
                                */}
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default GameDetails



