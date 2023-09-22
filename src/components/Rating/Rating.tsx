import React from 'react';
import style from "./style.module.scss"
import RatingStar from "@/ui-kit/RatingStar/RatingStar";

const getStars = (stars  :number) : React.ReactNode => {
    const allStars = []
   for(let i= 1; i<=stars; i++){
          allStars.push(<RatingStar key={i}/>)
    }
    return allStars
}


const Rating = async ({rating}: { rating: number }) => {
    const stars = Math.round(rating)

    return (
        <div className={style.rating}>
            {
                getStars(stars)
            }
        </div>
    );
};

export default Rating;