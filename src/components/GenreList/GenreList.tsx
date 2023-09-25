
import React from 'react';
import {getGenres} from "@/services/getGenres";
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss";
import GenreLink from "@/ui-kit/CustomLink/GenreLink";

const GenreList = async ({className} : {className? : string}) => {
    const genres = await getGenres()
    return (
        <ul className={classNames(className!,style.list)}>
            {
                genres?.map(genre => <GenreLink key={genre.id}
                                                 genre={genre}
                                                 className={style.link}/>)
            }
        </ul>
    );
};

export default GenreList;