import {GenreType} from "@/types/GenreTypes";

const api = process.env.GENRES_API;
const key = process.env.KEY;

export const getGenres = async (): Promise<GenreType[]> => {
    try {
        const response = await fetch(`${api}?key=${key}`);
        const data = await response.json();
        return data.results as GenreType[];
    } catch (error) {
        console.error('Error fetching platforms:', error);
        throw error;
    }
};