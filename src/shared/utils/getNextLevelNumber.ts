import { LEVEL_POINTS } from "@shared/consts/level";
import { IMapLevels } from "@shared/types/level";

export const getNextLevelNumber = (current: string, levels: IMapLevels) => {
    if (current === LEVEL_POINTS.START) {
        return '1';
    }

    if (current === LEVEL_POINTS.FINISH) {
        return LEVEL_POINTS.FINISH;
    }

    const numLevel = parseInt(current);
    if (!numLevel) {
        return LEVEL_POINTS.ERROR;
    }

    const nextLevel = String(numLevel + 1);
    if (nextLevel in levels) {
        return nextLevel;
    }

    return LEVEL_POINTS.ERROR;
}
