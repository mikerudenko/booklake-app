import { createContext, useContext } from 'react';

import { AppTableContextValues } from './AppTable.types';

export const AppTableContext = createContext<AppTableContextValues>({} as any);
export const useAppTableContext = () => useContext(AppTableContext);
