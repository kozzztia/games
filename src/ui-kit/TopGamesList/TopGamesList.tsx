import React from 'react';
import {getTopGamesByGenre} from "@/services/getTopGamesByGenre";
import style from "./style.module.scss"
import GameCard from "@/ui-kit/GameCard/GameCard";

const TopGamesList = async ({genre} : {genre : string}) => {
    const games  = await getTopGamesByGenre(genre.toLowerCase())
    return (
        <div className={style.page}>
            <h2>{genre}</h2>
            <ul className={style.list}>
                {
                    games?.map(item => <GameCard key={item.id} game={item}/>)
                }

            </ul>
        </div>
    );
};

export default TopGamesList;