export interface IStorage {
    currentLevel: string;
    finished: boolean;
    guessedWords: string[];
}
export interface IStorageCtx {
    data: IStorage;
    updateStorage: (data: IStorage) => void;
}
