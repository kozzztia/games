import React from 'react';
import {gameType} from "@/types/types";
import style from "./style.module.scss"
import Title from "@/ui-kit/Title/Title";
import Image from "next/image";
import Rating from "@/components/Rating/Rating";
const GameCard = ({game} : {game: gameType}) => {
    return (
        <div className={style.card}>
            <Title title={game.name}/>
            <Rating rating={game.rating}/>
        </div>
    );
};

export default GameCard;