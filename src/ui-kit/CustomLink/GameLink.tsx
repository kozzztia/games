
import React from 'react';
import Link from "next/link";
import style from "./style.module.scss"
import classNames from "@/services/classNameGenerator";


const GameLink = ({slug , name , className} : {slug :string , name : string , className? : string}) => {
    return (
            <Link href={`/game/${slug}`} className={classNames(className! , style.gameLink)}>
                {name}
            </Link>
    );
};

export default GameLink;