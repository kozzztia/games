import React from 'react';
import style from "./style.module.scss"
import classNames from "@/services/classNameGenerator";

const Title = ({title, className} : {title : string , className? : string}) => {
    return (
        <h2 className={classNames(className! , style.title)}>
            {title}
        </h2>
    );
};

export default Title;