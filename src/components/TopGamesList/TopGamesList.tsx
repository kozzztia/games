import React from 'react';
import {getTopGamesByGenre} from "@/services/getTopGamesByGenre";
import style from "./style.module.scss"
import GameCard from "@/ui-kit/GameCard/GameCard";
import Title from "@/ui-kit/Title/Title";

const TopGamesList = async ({genre , name} : {genre : string , name :string}) => {
    const games  = await getTopGamesByGenre(genre.toLowerCase())
    return (
        <div className={style.page}>
            <Title title={name}/>
            <ul className={style.list}>
                {
                    games?.map(item => <GameCard key={item.id} game={item}/>)
                }
            </ul>
        </div>
    );
};

export default TopGamesList;