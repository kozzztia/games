import React from 'react';
import {getGenres} from "@/services/getGenres";
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss";
import CustomLink from "@/ui-kit/CustomLink/CustomLink";

const GenresList = async ({className} : {className?: string}) => {
    const genres = await getGenres()
    return (
        <ul className={classNames(className as string,style.list)}>
            {
                genres?.map(genre => <CustomLink href={genre.slug} name={genre.name}/>)
            }
        </ul>
    );
};

export default GenresList;