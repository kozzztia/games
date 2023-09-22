import style from "@/styles/home.module.scss"
import dictionary from "../../public/dictionary/dictionary";
import TopGamesList from "@/components/TopGamesList/TopGamesList";
import {getGenres} from "@/services/getGenres";




export default async function Home ({searchParams,}: {searchParams?: { [key: string]: string | string[] | undefined };
}){
  const {homeTitle} = dictionary;
  const genres = await getGenres()
    return (
        <div className={style.home}>
            {searchParams?.search ? (
                <div className={style.search}>{searchParams.search}</div>
            ) : (
                genres.map((item) => (
                    <TopGamesList key={item.id} genre={item.slug} name={item.name} />
                ))
            )}
        </div>
    );  
}
