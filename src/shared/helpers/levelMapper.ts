import { ILevels, IMapLevels } from '@shared/types/level';

export const levelMapper = (data: ILevels): IMapLevels => {
    const res = {} as IMapLevels;

    for(const [key, level] of Object.entries(data)) {
        res[key] = level.words
    }

    return res;
}