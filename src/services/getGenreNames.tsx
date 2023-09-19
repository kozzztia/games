import {getGenres} from "@/services/getGenres";


type genresNameTypes = {name : string , id : number}


export const getGenreNames = async () : Promise<genresNameTypes[]> =>{
    const data : genresNameTypes[] = []
    const genres = await getGenres()
    genres.map((item) =>
        data.push({name : item.name , id : item.id}))
    return data
}
