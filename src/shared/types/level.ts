export interface ILevel {
    words: string[];
}

export type ILevels = Record<number, ILevel>;

export type IMapLevels = Record<string, string[]>

export interface ILevelContext {
    levels: IMapLevels;
    currentLevel: string;
    onChangeLevel: (nextLevel: string) => void;
}