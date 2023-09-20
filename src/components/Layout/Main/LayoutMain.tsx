import React from 'react';
import style from "../style.module.scss";
import GenresList from "@/components/GenresList/GenresList";

const LayoutMain = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={style.main}>
            <GenresList/>
            {
                children
            }
        </div>
    );
};

export default LayoutMain;