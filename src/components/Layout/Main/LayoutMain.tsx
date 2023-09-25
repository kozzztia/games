import React from 'react';
import style from "../style.module.scss";
import GenreList from "@/components/GenreList/GenreList";

const LayoutMain = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={style.main}>
            <GenreList/>
            {
                children
            }
        </div>
    );
};

export default LayoutMain;