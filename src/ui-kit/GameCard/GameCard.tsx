import React from 'react';
import {gameType} from "@/types/types";
import style from "./style.module.scss"
const GameCard = ({game} : {game: gameType}) => {
    return (
        <div className={style.card}>
            <p>{game.name}</p>

        </div>
    );
};

export default GameCard;