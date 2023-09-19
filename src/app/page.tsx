import style from "@/styles/home.module.scss"
import dictionary from "../../public/dictionary/dictionary";
import TopGamesList from "@/ui-kit/TopGamesList/TopGamesList";
import {getGenreNames} from "@/services/getGenreNames";
import {NextResponse} from "next/server";
import * as querystring from "querystring";




export default async function Home ({searchParams,}: {searchParams?: { [key: string]: string | string[] | undefined };
}){
  const {homeTitle} = dictionary;
  const genresNames = await getGenreNames()
  {
    if(!searchParams.search){
        return (
            <div className={style.home}>
                {
                    genresNames?.map(item => <TopGamesList key={item.id} genre={item.name}/>)
                }
            </div>
        )
    }else if(searchParams){
        return<p>{searchParams.search}</p>
    }
  }

}
