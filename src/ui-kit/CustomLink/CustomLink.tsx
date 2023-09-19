'use client'
import React from 'react';
import Link from "next/link";
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss"
import {usePathname} from "next/navigation";

const CustomLink = ({href , name} : {href : string, name : string}) => {
    const pathName = usePathname()
    const isActive = pathName === `/${href}`
    return (
        <Link href={href} className={classNames(style.link , isActive?style.active:"")}>
            {name}
        </Link>
    );
};

export default CustomLink;