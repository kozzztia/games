import {gameType} from "@/types/GameTypes";


const api = process.env.GAMES_API
const key = process.env.KEY
export const getTopGamesByGenre = async (genre : string) : Promise<gameType[]> => {
        try {
            const response : Response = await fetch(`${api}?key=${key}&genres=${genre}&page_size=3&page=1&ordering=!rating`);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching platforms:', error);
            throw error;
        }
}