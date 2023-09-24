import React from 'react';
import {getGameByGenre} from "@/services/getGamesByGenre";
import style from "@/styles/genre.module.scss"
import GameCard from "@/ui-kit/GameCard/GameCard";
import {getDetailsOfTheGame} from "@/services/getDetailsOfTheGame";
import {json} from "stream/consumers";
import {HTMLRenderer} from "@/services/HTMLReader";

type gameParamType = {
    params : {
        game : string;
    }
}
const Page = async ({params : {game}} : gameParamType) => {
    const gameDetails = await getDetailsOfTheGame(game)
    return (
        <div className={style.genrePage}>
            <HTMLRenderer html={gameDetails.description}/>
        </div>
    );
};

export default Page;