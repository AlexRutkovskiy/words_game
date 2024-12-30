import { useEffect, useMemo, useState } from 'react';

import { LevelContext } from '@app/context';
import { IMapLevels } from '@shared/types/level';
import { loadLevels } from '@shared/utils/loadLevels';
import { levelMapper } from '@shared/helpers/levelMapper';

interface ILevelProvider {
    children: React.ReactNode;
}

export const LevelProvider = ({ children }: ILevelProvider) => {
    const [levels, setLevels] = useState<IMapLevels>({});

    useEffect(() => {
        loadLevels().then((data) => {
            setLevels(levelMapper(data))
        })
    }, [])

    const providerValue = useMemo(() => {
        return {levels}
    }, [levels])

    return (
        <LevelContext.Provider value={providerValue}>
            {children}
        </LevelContext.Provider>
    );
}