import { useEffect, useMemo, useState } from 'react';

import { LevelContext } from '@app/context/LevelContext';
import { IMapLevels } from '@shared/types/level';
import { loadLevels } from '@shared/utils/loadLevels';
import { levelMapper } from '@shared/helpers/levelMapper';

interface ILevelProvider {
    children: React.ReactNode;
}

export const LevelProvider = ({ children }: ILevelProvider) => {
    const [levels, setLevels] = useState<IMapLevels>({})
    const [currentLevel, setCurrentLevel] = useState("1")

    useEffect(() => {
        loadLevels().then((data) => {
            setLevels(levelMapper(data))
        })
    }, [])

    const providerValue = useMemo(() => {
        return {
            levels,
            currentLevel,
            onChangeLevel: (nextLevel: string) => setCurrentLevel(nextLevel) 
        }
    }, [levels, currentLevel])

    return (
        <LevelContext.Provider value={providerValue}>
            {children}
        </LevelContext.Provider>
    );
}