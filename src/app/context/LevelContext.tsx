import { createContext } from 'react';

import { ILevelContext, IMapLevels } from '@shared/types/level';

export const LevelContext = createContext<ILevelContext>({
    levels: {} as IMapLevels
});
