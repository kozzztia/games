import React from 'react';
import style from "./style.module.scss"
const RatingStar = () => {
    return (
        <svg className={style.star} xmlns="http://www.w3.org/2000/svg">
            <polygon points="12.5,2 15.5,9.5 23.5,10.5 17,16.5 18.5,24 12.5,19 6.5,24 8,16.5 1.5,10.5 9.5,9.5"/>
        </svg>
    );
};

export default RatingStar;