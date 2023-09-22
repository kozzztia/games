'use client'
import React from 'react';
import Link from "next/link";
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss"
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import {GenresType} from "@/types/types";

const CustomLink = ({genre , className} : {genre : GenresType ;className? : string}) => {
    const pathName = usePathname()
    const {push} = useRouter()
    const isActive = pathName === `/${genre.slug}`
    return (
            <Link href={genre.slug} className={classNames(className!,style.link , isActive?style.active:"")}>
                {genre.name}
            </Link>
    );
};

export default CustomLink;