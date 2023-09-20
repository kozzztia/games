
import React from 'react';
import {getGenres} from "@/services/getGenres";
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss";
import CustomLink from "@/ui-kit/CustomLink/CustomLink";

const GenresList = async ({className} : {className? : string}) => {
    const genres = await getGenres()
    return (
        <ul className={classNames(className!,style.list)}>
            {
                genres?.map(genre => <CustomLink key={genre.id} href={genre.slug} name={genre.name} className={style.link}/>)
            }
        </ul>
    );
};

export default GenresList;