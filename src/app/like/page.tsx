'use client'

import React, {useEffect, useState} from 'react';
import style from "@/styles/like.module.scss";
import {gameType} from "@/types/GameTypes";
import {fetchLocalData} from "@/services/fetchLocalData";
import ClientGameCard from "@/ui-kit/GameCard/ClientGameCard";




const Page = () => {
    const [likedGames , setLikedGames] = useState<gameType[] | undefined>(undefined)
    useEffect(() => {
        fetchLocalData().then((res)=>{
            setLikedGames(res)
        });
    }, []);
    return (
        <div className={style.like}>
            {
                likedGames&&likedGames.map(item=>
                    <ClientGameCard key={item.id} game={item}/>
                )
            }
        </div>
    );
};

export default Page;