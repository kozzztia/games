import React from 'react';
import style from "../style.module.scss";
import classNames from "@/services/classNameGenerator";
import SearchForm from "@/components/SearchForm/SearchForm";
import BurgerMenu from "@/ui-kit/BurgerMenu/BurgerMenu";
import GenreList from "@/components/GenreList/GenreList";
import HomeLink from "@/ui-kit/HomeLink/HomeLink";
import { headers } from 'next/headers';


const LayoutHeader = async () => {
    return (
        <div className={classNames(style.header)}>
            <HomeLink/>
            <SearchForm className={style.form}/>
        </div>
    );
};

export default LayoutHeader;