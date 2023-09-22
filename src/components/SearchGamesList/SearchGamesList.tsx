import React from 'react';
import {getSearchGamesByGenre} from "@/services/getSearchGamesByGenre";
import style from "./style.module.scss"
import GameCard from "@/ui-kit/GameCard/GameCard";
import Title from "@/ui-kit/Title/Title";

const SearchGamesList = async ({genre , name , param} : {genre : string , name :string , param : string | undefined}) => {
    const games  = await getSearchGamesByGenre(genre.toLowerCase() , param)
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

export default SearchGamesList;