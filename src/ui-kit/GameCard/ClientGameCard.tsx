'use client'
import React from 'react';
import {dictionary} from "@/dictionary/dictionary";
import style from "@/ui-kit/GameCard/style.module.scss";
import Image from "next/image";
import Title from "@/ui-kit/Title/Title";
import Rating from "@/components/Rating/Rating";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import GameLink from "@/ui-kit/CustomLink/GameLink";
import PlatformList from "@/components/PlatformList/PlatformList";
import {gameType} from "@/types/GameTypes";


const ClientGameCard = ({game} : {game : gameType}) => {
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
            <button>remove</button>
        </div>
    );
};

export default ClientGameCard;