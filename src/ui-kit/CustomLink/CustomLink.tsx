'use client'
import React from 'react';
import Link from "next/link";
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss"
import {usePathname, useRouter} from "next/navigation";

const CustomLink = ({href , name , className} : {href : string, name : string, className? : string}) => {
    const pathName = usePathname()
    const {push} = useRouter()
    const isActive = pathName === `/${href}`
    return (
        <Link href={href} className={classNames(className!,style.link , isActive?style.active:"")}>
            {name}
        </Link>
    );
};

export default CustomLink;