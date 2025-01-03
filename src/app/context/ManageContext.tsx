import { createContext } from 'react';

import { IManageProvider } from '@shared/types/manageProvider';
import { getDefaultStorage } from '@shared/utils/getDefaultStorage';

export const ManageContext = createContext<IManageProvider>({
    data: getDefaultStorage(),
    startLevel: () => {},
    addGuessedWord: (word: string) => {console.log(word)},
})
