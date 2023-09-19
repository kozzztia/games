import React from 'react';
import {getGameByGenre} from "@/services/getGamesByGenre";
import style from "@/styles/genre.module.scss"

type genreParamType = {
    params : {
        genre : string;
    }
}
const Page = async ({params : {genre}} : genreParamType) => {
    const games = await getGameByGenre(genre)
    return (
        <div className={style.genrePage}>
            {
                games?.map(item => <p>{item.slug}</p>)
            }
        </div>
    );
};

export default Page;