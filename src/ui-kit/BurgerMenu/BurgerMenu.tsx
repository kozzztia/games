'use client'
import React, {useState} from 'react';
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss";
import {usePathname, useRouter} from "next/navigation";


const BurgerMenu = ({className} : {className?: string}) => {
    const pathName = usePathname();
    const {push , replace} = useRouter()
    return (
        <>
        <button
            className={classNames(className!, style.burger)}
            onClick={()=>push(`${pathName}?modal`)}>
            <svg width="24" height="19" viewBox="0 0 24 19" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17.5H23M6.31475 9.5C14.9063 9.5 14.4085 9.5 23 9.5M1 1.5H23"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        </>
    );
};

export default BurgerMenu;