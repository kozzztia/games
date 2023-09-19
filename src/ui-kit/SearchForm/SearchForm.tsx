'use client'
import React, {useState} from 'react';
import style from "./style.module.scss"
import dictionary from "../../../public/dictionary/dictionary";
import classNames from "@/services/classNameGenerator";
import { useRouter } from "next/navigation";

const SearchForm = ({className}  :{className : string}) => {
    const [searchValue, setSearchValueValue] = useState<string>("");
    const {searchFormPlaceHolder} = dictionary;
    const {push} = useRouter()
    return (
        <form className={classNames(className , style.searchForm)}
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>

            </button>
        </form>
    );
};

export default SearchForm;