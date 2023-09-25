'use client'
import React from 'react';
import Link from "next/link";
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss"
import {usePathname, useRouter} from "next/navigation";
import {GenreType} from "@/types/GenreTypes";



const GenreLink = ({genre , className} : {genre : GenreType ;className? : string}) => {
    const pathName = usePathname();
    const isActive = pathName === `/genre/${genre.slug}`;
    return (
            <Link href={`/genre/${genre.slug}`} className={classNames(className!,style.genreLink , isActive?style.active:"")}>
               {genre.name}
            </Link>
    );
};

export default GenreLink;