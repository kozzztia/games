import React from 'react';
import style from "../style.module.scss";
import dictionary from "../../../../public/dictionary/dictionary";

const LayoutHeader = () => {
    const {headerTitle} = dictionary;
    return (
        <div className={style.header}>
            {headerTitle}
        </div>
    );
};

export default LayoutHeader;