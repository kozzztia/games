import React from 'react';
import style from "../style.module.scss";
import classNames from "@/services/classNameGenerator";
import SearchForm from "@/ui-kit/SearchForm/SearchForm";
import BurgerMenu from "@/ui-kit/BurgerMenu/BurgerMenu";
import GenresList from "@/components/GenresList/GenresList";
import HomeLink from "@/ui-kit/HomeLink/HomeLink";


const LayoutHeader = async () => {
    return (
        <div className={classNames(style.header)}>
            <GenresList className={style.genresList}/>
            <HomeLink className={style.homeLink}/>
            <BurgerMenu className={style.burger}/>
            <SearchForm className={style.form}/>
        </div>
    );
};

export default LayoutHeader;