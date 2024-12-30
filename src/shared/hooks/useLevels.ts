import { useContext } from 'react';

import { LevelContext } from '@app/context/LevelContext';

export const useLevels = () => {
    return useContext(LevelContext);
}