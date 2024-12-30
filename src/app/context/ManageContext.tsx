import { createContext } from 'react';

import { IManageProvider } from '@shared/types/manageProvider';
import { LEVEL_POINTS } from '@shared/consts/level';

export const ManageContext = createContext<IManageProvider>({
    currentLevel: LEVEL_POINTS.START,
    finished: false,
    startLevel: () => {}
})