import React from 'react';
import style from "./style.module.scss"
import {getStars} from "@/services/getStars";
import classNames from "@/services/classNameGenerator";




const Rating = async ({rating , className}: { rating: number , className? :string}) => {
    const stars = Math.ceil(rating)

    return (
        <div className={classNames(className! , style.rating)}>
            {
                getStars(stars)
            }
        </div>
    );
};

export default Rating;