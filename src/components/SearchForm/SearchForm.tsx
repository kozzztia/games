'use client'
import React, {useState} from 'react';
import style from "./style.module.scss"
import dictionary from "../../../public/dictionary/dictionary";
import classNames from "@/services/classNameGenerator";
import {useRouter} from "next/navigation";

const SearchForm = ({className}: { className: string }) => {
    const [searchValue, setSearchValueValue] = useState<string>("");
    const {searchFormPlaceHolder} = dictionary;
    const {push} = useRouter()
    return (
        <form className={classNames(className, style.searchForm)}
              onSubmit={async (e) => {
                  await e.preventDefault()
                  await push(`/?search=${searchValue}`)
                  await setSearchValueValue("")
              }}
        >
            <input
                type={"text"}
                className={style.input}
                value={searchValue}
                onChange={(e) => {
                    setSearchValueValue(e.target.value)
                }}
                placeholder={searchFormPlaceHolder}
            />

            <button
                type={"submit"}
                className={style.button}>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 19.9 19.7">
                    <g>
                        <path d="M18.5 18.3l-5.4-5.4"/>
                        <circle cx="8" cy="8" r="7" fill="transparent"/>
                    </g>
                </svg>

            </button>
        </form>
    );
};

export default SearchForm;