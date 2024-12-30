import { useContext } from 'react';

import { LevelContext } from '@app/context';

export const useLevels = () => {
    return useContext(LevelContext);
}