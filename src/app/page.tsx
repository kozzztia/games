
import style from "@/styles/home.module.scss"
import dictionary from "../../public/dictionary/dictionary";


const getData = async ()=>{
  const api = process.env.GAME_API;
  const key = process.env.GAME_KEY;
  fetch(api)
      .then(response => response.json())
      .then(json => console.log(json))
}
export default async function Home (){
  await getData()
  const {homeTitle} = dictionary;
  return (
  <div className={style.home}>
    {/*{homeTitle}*/}
  </div>
  )
}
