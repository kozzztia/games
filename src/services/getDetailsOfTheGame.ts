import {GameDetailsType} from "@/types/GameDetailsTypes";

const api = process.env.GAMES_API;
const key = process.env.KEY;

export const getDetailsOfTheGame = async (slug: string): Promise<GameDetailsType> => {
    try {
        const response = await fetch(`${api}/${slug}?key=${key}`);
        const data = await response.json();
        return data as GameDetailsType;
    } catch (error) {
        console.error('Error fetching platforms:', error);
        throw error;
    }
};