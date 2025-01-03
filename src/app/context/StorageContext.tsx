import { createContext } from 'react';

import { IStorage, IStorageCtx } from '@shared/types/storage';
import { getDefaultStorage } from '@shared/utils/getDefaultStorage';

export const StorageContext = createContext<IStorageCtx>({
    data: getDefaultStorage(),
    updateStorage: (data: IStorage) => console.log(data)
});
