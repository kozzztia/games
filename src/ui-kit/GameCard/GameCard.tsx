import React from 'react';
import {gameType} from "@/types/GameTypes";
import style from "./style.module.scss"
import Title from "@/ui-kit/Title/Title";
import Rating from "@/components/Rating/Rating";
import GameLink from "@/ui-kit/CustomLink/GameLink";
const GameCard = ({game} : {game: gameType}) => {
    return (
        <div className={style.card}>
            <Title title={game.name}/>
            <Rating rating={game.rating}/>
            <GameLink slug={game.slug} name={game.name}/>
        </div>
    );
};

export default GameCard;