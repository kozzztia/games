import React from 'react';
import style from "./style.module.scss"
import Link from "next/link";
import classNames from "@/services/classNameGenerator";
const LikePageLink = ({className} : {className? : string}) => {
    return (
        <Link href={'/like'} className={classNames(className!,style.likeLink)}>
            <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5.79167 3C3.69791 3 2 4.61538 2 6.60837C2 8.2172 2.66354 12.0355 9.19507 15.8954C9.31206 15.9638 9.44638 16 9.58333 16C9.72029 16 9.8546 15.9638 9.9716 15.8954C16.5031 12.0355 17.1667 8.2172 17.1667 6.60837C17.1667 4.61538 15.4688 3 13.375 3C11.2812 3 9.58333 5.18689 9.58333 5.18689C9.58333 5.18689 7.88543 3 5.79167 3Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
    );
};

export default LikePageLink;