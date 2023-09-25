import {gameType} from "@/types/GameTypes";


const api = process.env.GAMES_API
const key = process.env.KEY






export const getGameByGenre = async (genre : string): Promise<gameType[]> => {
        try {
            const response = await fetch(`${api}?key=${key}&genres=${genre}`);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching platforms:', error);
            throw error;
        }
}