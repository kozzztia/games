
import style from "@/styles/home.module.scss"
import dictionary from "../../public/dictionary/dictionary";

export default function Home() {
  const {homeTitle} = dictionary
  return (
  <div className={style.home}>
    {homeTitle}
  </div>
  )
}
