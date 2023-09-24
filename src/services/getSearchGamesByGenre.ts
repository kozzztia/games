import {gameType} from "@/types/GameTypes";


const api = process.env.GAMES_API
const key = process.env.KEY
export const getSearchGamesByGenre = async (genre : string , param: string | string[] |undefined) : Promise<gameType[]> => {
        try {
            const response : Response = await fetch(`${api}?key=${key}&genres=${genre}&page_size=10&page=1&search=${param}`);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching platforms:', error);
            throw error;
        }
}