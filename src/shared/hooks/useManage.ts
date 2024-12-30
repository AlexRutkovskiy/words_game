import { useContext } from 'react';

import { ManageContext } from '@app/context';

export const useManage = () => {
    return useContext(ManageContext)
}