

import React from 'react';
import {gameType} from "@/types/GameTypes";
import style from "./style.module.scss"
import Title from "@/ui-kit/Title/Title";
import Rating from "@/components/Rating/Rating";
import GameLink from "@/ui-kit/CustomLink/GameLink";
import Image from "next/image";
import PlatformList from "@/components/PlatformList/PlatformList";
import {dictionary} from "@/dictionary/dictionary";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

const GameCard = ({game}: { game: gameType }) => {
    const {linkTo} = dictionary
    return (
        <div className={style.card}>
            <Image src={game.background_image} alt={game.name} width={1600} height={1600} loading={"lazy"} className={style.image}/>
            <div className={style.release}>{game.released}</div>
            <Title title={game.name} className={style.title}/>
            <Rating rating={game.rating_top} className={style.rating}/>
            <FavoriteButton className={style.favorite} game={game}/>
            <GameLink slug={game.slug} name={linkTo} className={style.link} />
            <PlatformList platforms={game.platforms} className={style.platforms}/>
        </div>
    );
};

export default GameCard;