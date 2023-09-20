import style from "@/styles/home.module.scss"
import dictionary from "../../public/dictionary/dictionary";
import TopGamesList from "@/components/TopGamesList/TopGamesList";
import {getGenreNames} from "@/services/getGenreNames";




export default async function Home ({searchParams,}: {searchParams?: { [key: string]: string | string[] | undefined };
}){
  const {homeTitle} = dictionary;
  const genresNames = await getGenreNames()
  {
    if(!searchParams.search){
        return (
            <div className={style.home}>
                {
                    genresNames?.map(item => <TopGamesList key={item.id} genre={item.slug} name={item.name}/>)
                }
            </div>
        )
    }else if(searchParams.search){
        return(
            <div className={style.search}>
                {searchParams.search}
            </div>
        )
    }
  }

}
