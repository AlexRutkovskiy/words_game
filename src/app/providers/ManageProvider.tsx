import { useCallback, useMemo, useState } from 'react';

import { ManageContext } from '@app/context';
import { IManageProvider } from '@shared/types/manageProvider';
import { LEVEL_POINTS } from '@shared/consts/level';

interface IManageProps {
    children: React.ReactNode;
}

export const ManageProvider = ({ children }: IManageProps) => {
    const [currentLevel, setCurrentLevel] = useState(LEVEL_POINTS.START)
    const [isFinished, setIsFinished] = useState(false)

    const handleStartLevel = useCallback((level: string) => {
        setCurrentLevel(level);
        setIsFinished(false);
    }, [])

    const value = useMemo(() => {
        return {
            currentLevel,
            finished: isFinished,
            startLevel: handleStartLevel
        } as IManageProvider
    }, [currentLevel, isFinished, handleStartLevel])

    return (
        <ManageContext.Provider value={value}>
            {children}
        </ManageContext.Provider>
    )
}