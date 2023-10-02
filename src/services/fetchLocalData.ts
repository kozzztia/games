import {localStoreGetItem, localStoreSetItem} from "@/localStore/localStore";
import {gameType} from "@/types/GameTypes";

export         const fetchLocalData = async () => {
    const res = await localStoreGetItem('games');
    return res as number[] | undefined
};