import {GenresType} from "@/types/types";

const api = process.env.GENRES_API;
const key = process.env.KEY;

export const getGenres = async (): Promise<GenresType[]> => {
    try {
        const response = await fetch(`${api}?key=${key}`);
        const data = await response.json();
        return data.results as GenresType[];
    } catch (error) {
        console.error('Error fetching platforms:', error);
        throw error;
    }
};