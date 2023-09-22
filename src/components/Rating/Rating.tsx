import React from 'react';
import style from "./style.module.scss"
import {getStars} from "@/services/getStars";




const Rating = async ({rating}: { rating: number }) => {
    const stars = Math.ceil(rating)

    return (
        <div className={style.rating}>
            {
                getStars(stars)
            }
        </div>
    );
};

export default Rating;