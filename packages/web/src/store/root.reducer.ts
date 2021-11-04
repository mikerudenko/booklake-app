import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { I18nSlice } from './i18n';
import { NotificationsSlice } from './notifications';
import { CreditCardsSlice } from './credit-cards';
import { AuthSlice } from './auth';
import { ManagersSlice } from './managers';
import { LakesSlice } from './lakes';
import { FeaturesSlice } from './features';
import { OrdersSlice } from './orders';
import { ModalSlice } from './modal';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history) as any,
    [I18nSlice.name]: I18nSlice.reducer,
    [NotificationsSlice.name]: NotificationsSlice.reducer,
    [AuthSlice.name]: AuthSlice.reducer,
    [CreditCardsSlice.name]: CreditCardsSlice.reducer,
    [FeaturesSlice.name]: FeaturesSlice.reducer,
    [OrdersSlice.name]: OrdersSlice.reducer,
    [ManagersSlice.name]: ManagersSlice.reducer,
    [LakesSlice.name]: LakesSlice.reducer,
    [ModalSlice.name]: ModalSlice.reducer,
  });
