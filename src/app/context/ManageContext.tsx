import { createContext } from 'react';

import { IManageProvider } from '@shared/types/manageProvider';
import { LEVEL_POINTS } from '@shared/consts/level';

export const ManageContext = createContext<IManageProvider>({
    currentLevel: LEVEL_POINTS.START,
    finished: false,
    startLevel: () => {},
    guessedWords: [],
    addGuessedWord: (word: string) => {console.log(word)},
    updateFromStorage: (level: string, finished: boolean, guessedWords: string[]) => {
        console.log(level);
        console.log(finished);
        console.log(guessedWords);
    }
})