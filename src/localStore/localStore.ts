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

export const localStoreGetItem = (id: string) => isIndexDBAvailable() && localForage.getItem(id);

export const localStoreSetItem = (id: string, game : any) => isIndexDBAvailable() && localForage.setItem(id, game);

export const localStoreRemoveItem = (id: string) => isIndexDBAvailable() && localForage.removeItem(id);

export default localStore;