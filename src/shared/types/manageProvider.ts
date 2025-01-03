import { IStorage } from './storage';
export interface IManageProvider {
    data: IStorage;
    startLevel: ( nextLevel: string ) => void;
    addGuessedWord: (word: string) => void;
}
