import React from 'react';
import {PlatformType} from "@/types/PlatformType";
import classNames from "@/services/classNameGenerator";
import style from "./style.module.scss"

const PlatformList = ({platforms , className}  : {className : string , platforms : PlatformType[]}) => {
    return (
        <ul className={classNames(className! , style.list)}>
            {
               platforms&&platforms.map(platform => <span key={platform.platform.id} className={style.platform}>{platform.platform.name}</span>)
            }
        </ul>
    );
};

export default PlatformList;