import style from "@/styles/home.module.scss"
import dictionary from "../../public/dictionary/dictionary";
import TopGamesList from "@/components/TopGamesList/TopGamesList";
import {getGenres} from "@/services/getGenres";
import SearchGamesList from "@/components/SearchGamesList/SearchGamesList";




export default async function Home ({searchParams,}: {searchParams?: { [key: string]: string | string[] | undefined };
}){
  const {homeTitle} = dictionary;
  const genres = await getGenres()
    return (
        <div className={style.home}>
            {searchParams?.search ? (
                genres.map((item) => (
                    <SearchGamesList key={item.id} genre={item.slug} name={item.name} param={searchParams?.search}/>
                ))
            ) : (
                genres.map((item) => (
                    <TopGamesList key={item.id} genre={item.slug} name={item.name} />
                ))
            )}
        </div>
    );  
}
