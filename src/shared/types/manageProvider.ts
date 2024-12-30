export interface IManageProvider {
    currentLevel: string;
    finished: boolean;
    startLevel: ( nextLevel: string ) => void;
}