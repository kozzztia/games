import localForage from 'localforage';
import {gameType} from "@/types/GameTypes";

const localStore = localForage;

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
    localForage.config({
        name: 'likedGames',
        driver: localForage.INDEXEDDB,
    });
}

export const isIndexDBAvailable = () => isBrowser && localForage.supports(localForage.INDEXEDDB);

export const localStoreGetItem = async (id: string): Promise<number[] | null> => {
    if (isIndexDBAvailable()) {
        const result = await localForage.getItem(id);
        return (result as number[]) || null;
    } else {
        return null;
    }
};

export const localStoreSetItem = (id: string, gamesId: number[]) => isIndexDBAvailable() && localForage.setItem(id, gamesId);

export const localStoreRemoveItem = (id: string) => isIndexDBAvailable() && localForage.removeItem(id);

export default localStore;