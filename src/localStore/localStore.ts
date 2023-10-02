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

export const localStoreGetItem = async (key: string): Promise<gameType[] | null> => {
    if (isIndexDBAvailable()) {
        const result = await localForage.getItem(key);
        return (result as gameType[]) || null;
    } else {
        return null;
    }
};

export const localStoreSetItem = (key: string, game: gameType[]) => isIndexDBAvailable() && localForage.setItem(key, game);

export const localStoreRemoveItem = (key: string) => isIndexDBAvailable() && localForage.removeItem(key);

export default localStore;