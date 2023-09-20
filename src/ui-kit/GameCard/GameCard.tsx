import React from 'react';
import {gameType} from "@/types/types";
import style from "./style.module.scss"
import Title from "@/ui-kit/Title/Title";
const GameCard = ({game} : {game: gameType}) => {
    return (
        <div className={style.card}>
            <Title title={game.name} />
            {game.rating}

        </div>
    );
};

export default GameCard;