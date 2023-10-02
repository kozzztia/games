import React from 'react';
import style from "../style.module.scss";
import classNames from "@/services/classNameGenerator";
import SearchForm from "@/components/SearchForm/SearchForm";
import HomeLink from "@/ui-kit/CustomLink/HomeLink";
import { headers } from 'next/headers';
import BasketLink from "@/ui-kit/CustomLink/LikeLink";


const LayoutHeader = async () => {
    return (
        <div className={classNames(style.header)}>
            <HomeLink/>
            <BasketLink className={style.basket}/>
            <SearchForm className={style.form}/>
        </div>
    );
};

export default LayoutHeader;