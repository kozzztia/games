import React from 'react';
import style from "@/styles/game.module.scss"
import {getDetailsOfTheGame} from "@/services/getDetailsOfTheGame";
import {HTMLRenderer} from "@/services/HTMLReader";
import Title from "@/ui-kit/Title/Title";

type gameParamType = {
    params : {
        game : string;
    }
}
const Page = async ({params : {game}} : gameParamType) => {
    const gameDetails = await getDetailsOfTheGame(game)
    return (
        <div className={style.gamePage}>
            {gameDetails.name&&<Title title={gameDetails.name}/>}
            {gameDetails.description&&<HTMLRenderer html={gameDetails.description}/>}
        </div>
    );
};

export default Page;