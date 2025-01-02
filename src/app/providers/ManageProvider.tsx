import { useCallback, useMemo, useState } from 'react';

import { ManageContext } from '@app/context';
import { IManageProvider } from '@shared/types/manageProvider';
import { LEVEL_POINTS } from '@shared/consts/level';

interface IManageProps {
    children: React.ReactNode;
}

export const ManageProvider = ({ children }: IManageProps) => {
    const [currentLevel, setCurrentLevel] = useState(LEVEL_POINTS.START);
    const [isFinished, setIsFinished] = useState(false);
    const [guessedLevelWords, setGuessedLevelWords] = useState<string[]>([]);

    const handleStartLevel = useCallback((level: string) => {
        setCurrentLevel(level);
        setIsFinished(false);
    }, [])

    const handleGuessedLevelWords = useCallback((word: string) => {
        setGuessedLevelWords([...guessedLevelWords, word])
    }, [guessedLevelWords])

    const updateFromStorage = useCallback((level: string, finished: boolean, guessedWords: string[]) => {
        setCurrentLevel(level);
        setIsFinished(finished);
        setGuessedLevelWords(guessedWords);
    }, [])

    const value = useMemo(() => {
        return {
            currentLevel,
            finished: isFinished,
            startLevel: handleStartLevel,
            guessedWords: guessedLevelWords,
            addGuessedWord: handleGuessedLevelWords,
            updateFromStorage
        } as IManageProvider
    }, [
        currentLevel, 
        isFinished, 
        handleStartLevel, 
        guessedLevelWords, 
        handleGuessedLevelWords,
        updateFromStorage
    ])

    return (
        <ManageContext.Provider value={value}>
            {children}
        </ManageContext.Provider>
    )
}
