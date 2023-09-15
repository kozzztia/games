import React from 'react';
import style from "../style.module.scss";
import dictionary from "../../../../public/dictionary/dictionary";
import classNames from "@/services/classNameGenerator";
import SearchForm from "@/ui-kit/SearchForm/SearchForm";
import BurgerMenu from "@/ui-kit/BurgerMenu/BurgerMenu";

const LayoutHeader = () => {
    const {headerTitle} = dictionary;
    return (
        <div className={classNames(style.header)}>
            <BurgerMenu/>
            <SearchForm/>
        </div>
    );
};

export default LayoutHeader;