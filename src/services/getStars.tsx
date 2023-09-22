import React from "react";
import RatingStar from "@/ui-kit/RatingStar/RatingStar";

export const getStars = (stars  :number) : React.ReactNode => {
    const allStars = []
    for(let i= 1; i<=stars; i++){
        allStars.push(<RatingStar key={i}/>)
    }
    return allStars
}