import { IStorage } from '@shared/types/storage';
import { LEVEL_POINTS } from '@shared/consts/level';

export const getDefaultStorage = (): IStorage => {
    return {
        currentLevel: LEVEL_POINTS.START,
        finished: false,
        guessedWords: [], 
    }
}
