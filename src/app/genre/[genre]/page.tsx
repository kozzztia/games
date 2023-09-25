import React from 'react';
import {getGameByGenre} from "@/services/getGamesByGenre";
import style from "@/styles/genre.module.scss"
import GameCard from "@/ui-kit/GameCard/GameCard";
import Title from "@/ui-kit/Title/Title";

type genreParamType = {
    params : {
        genre : string;
    }
}
const Page = async ({params : {genre}} : genreParamType) => {
    const games = await getGameByGenre(genre)
    const genreTitle = genre.split("-").join(" ")
    return (


        <div className={style.genrePage}>
            <Title title={genreTitle} className={style.title}/>
            {
                games?.map(item => <GameCard key={item.id} game={item}/>)
            }
        </div>
    );
};

export default Page;