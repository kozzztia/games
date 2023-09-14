import React from 'react';
import style from "../style.module.scss";

const LayoutMain = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={style.main}>
            {
                children
            }
        </div>
    );
};

export default LayoutMain;