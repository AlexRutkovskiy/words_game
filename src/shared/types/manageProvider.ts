export interface IManageProvider {
    currentLevel: string;
    finished: boolean;
    startLevel: ( nextLevel: string ) => void;
    guessedWords: string[];
    addGuessedWord: (word: string) => void;
    updateFromStorage: (level: string, finished: boolean, guessedWords: string[]) => void
}