import {gameType} from "@/types/GameTypes";
import {localStoreGetItem, localStoreSetItem} from "@/localStore/localStore";

export const favoriteGameButtonHandler = async (game  :gameType) => {
    const games : gameType[] | null = await localStoreGetItem("games");
    if(games?.some(item => item.id === game.id)){
        await localStoreSetItem('games' , games?[...games?.filter(item=> item.id !== game.id)]:[games]);
    } else {
        await localStoreSetItem('games' , games?[...games , game]:[game]);
    }
}