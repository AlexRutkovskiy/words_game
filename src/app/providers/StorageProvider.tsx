import { useCallback, useMemo, useState } from 'react';

import { StorageContext } from '@app/context';
import { IStorage, IStorageCtx } from '@shared/types/storage';
import { STORAGE_KEY } from '@shared/consts/storage';
import { getDefaultStorage } from '@shared/utils/getDefaultStorage';

interface IStorageProps {
    children: React.ReactNode;
}

export const StorageProvider = ({ children }: IStorageProps) => {
    const [storage] = useState<IStorage>(() => {
        if (localStorage.getItem(STORAGE_KEY)) {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY) as string);
            return data as IStorage;
        }

        return getDefaultStorage()
    })

    const updateStorage = useCallback((data: IStorage) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, [])

    const value: IStorageCtx = useMemo(() => {
        return {
            data: storage,
            updateStorage
        }
    }, [storage, updateStorage])

    return (
        <StorageContext.Provider value={value}>
            {children}
        </StorageContext.Provider>
    )
}
