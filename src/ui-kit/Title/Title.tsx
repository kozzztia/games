import React from 'react';
import style from "./style.module.scss"

const Title = ({title , img} : {title : string , img?: string}) => {
    return (
        <h2 className={style.title}>
            {title}
        </h2>
    );
};

export default Title;