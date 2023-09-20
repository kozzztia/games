import {getGenres} from "@/services/getGenres";


type genresNameTypes = {name : string , id : number , slug : string}


export const getGenreNames = async () : Promise<genresNameTypes[]> =>{
    const data : genresNameTypes[] = []
    const genres = await getGenres()
    genres.map((item) =>
        data.push({name : item.name , id : item.id , slug : item.slug}))
    return data
}
