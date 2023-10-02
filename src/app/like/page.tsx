'use client'

import React, {useEffect, useState} from 'react';
import style from "@/styles/like.module.scss";
import {gameType} from "@/types/GameTypes";
import {fetchLocalData} from "@/services/fetchLocalData";

import GameCard from "@/ui-kit/GameCard/GameCard";


const Page = () => {
    const [likedGames , setLikedGames] = useState<number[] | undefined>(undefined)
    useEffect(() => {
        fetchLocalData().then((res)=>{
            setLikedGames(res)
        });
    }, []);
    return (
        <div className={style.like}>
            {
                likedGames&&likedGames.map(item=> <p key={item}>{item}</p>)
            }
        </div>
    );
};

export default Page;