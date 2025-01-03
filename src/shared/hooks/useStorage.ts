import { useContext } from 'react';

import { StorageContext } from '@app/context';

export const useStorage = () => {
    return useContext(StorageContext);
}
