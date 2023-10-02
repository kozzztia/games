'use client'
import React from 'react';
import style from "./style.module.scss"
import classNames from "@/services/classNameGenerator";
import { localStoreGetItem, localStoreSetItem} from '@/localStore/localStore';
import {gameType} from "@/types/GameTypes";
const FavoriteButton = ({game , className} : {game : gameType , className? : string}) => {
    return (
            <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={classNames(className!,style.button)}
                 onClick={async () => {
                     const games : gameType[] | null = await localStoreGetItem("games");
                     if(games?.includes(game)){
                         return;
                     } else {
                         await localStoreSetItem('games' , games?[...games , game]:[game]);
                     }
                 }}
            >
                <path d="M5.79167 3C3.69791 3 2 4.61538 2 6.60837C2 8.2172 2.66354 12.0355 9.19507 15.8954C9.31206 15.9638 9.44638 16 9.58333 16C9.72029 16 9.8546 15.9638 9.9716 15.8954C16.5031 12.0355 17.1667 8.2172 17.1667 6.60837C17.1667 4.61538 15.4688 3 13.375 3C11.2812 3 9.58333 5.18689 9.58333 5.18689C9.58333 5.18689 7.88543 3 5.79167 3Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
    );
};

export default FavoriteButton;