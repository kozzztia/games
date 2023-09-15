import React from 'react';
import style from "../style.module.scss";
import dictionary from "../../../../public/dictionary/dictionary";
import classNames from "@/services/classNameGenerator";
import SearchForm from "@/ui-kit/SearchForm/SearchForm";

const LayoutHeader = () => {
    const {headerTitle} = dictionary;
    return (
        <div className={classNames(style.header)}>
            {headerTitle}
            <SearchForm/>
        </div>
    );
};

export default LayoutHeader;