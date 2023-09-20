import React from 'react';
import {getGameByGenre} from "@/services/getGamesByGenre";
import style from "@/styles/genre.module.scss"
import GameCard from "@/ui-kit/GameCard/GameCard";

type genreParamType = {
    params : {
        genre : string;
    }
}
const Page = async ({params : {genre}} : genreParamType) => {
    const games = await getGameByGenre(genre)
    return (
        <div className={style.genrePage}>
            {
                games?.map(item => <GameCard key={item.id} game={item}/>)
            }
        </div>
    );
};

export default Page;