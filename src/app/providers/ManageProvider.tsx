import { useCallback, useMemo, useState } from 'react';

import { ManageContext } from '@app/context';
import { IManageProvider } from '@shared/types/manageProvider';
import { useStorage } from '@shared/hooks/useStorage'
import { IStorage } from '@shared/types/storage';

interface IManageProps {
    children: React.ReactNode;
}

export const ManageProvider = ({ children }: IManageProps) => {
    const { data, updateStorage } = useStorage();
    const [storage, setStorage] = useState<IStorage>({...data});

    const handleStartLevel = useCallback((level: string) => {
        setStorage(prev => {
            const newStorage = {...prev, currentLevel: level, finished: false};
            updateStorage(newStorage);
            return newStorage;
        })
    }, [updateStorage])

    const handleGuessedLevelWords = useCallback((word: string) => {
        setStorage(prev => {
            const newStorage = {...prev, guessedWords: [...prev.guessedWords, word]};
            updateStorage(newStorage);
            return newStorage;
        })
    }, [updateStorage])

    const value = useMemo(() => {
        return {
            data: storage,
            startLevel: handleStartLevel,
            addGuessedWord: handleGuessedLevelWords
        } as IManageProvider
    }, [
        storage,
        handleStartLevel, 
        handleGuessedLevelWords
    ])

    return (
        <ManageContext.Provider value={value}>
            {children}
        </ManageContext.Provider>
    )
}
