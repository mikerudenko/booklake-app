import { useSelector } from 'react-redux';

import { OrdersSlice } from './orders.slice';
import { selectOrderList, selectOrdersNetworkStatus } from './orders.selectors';
import { useActions } from '../../hooks/use-actions';

export const useOrdersConnect = () => {
  const ordersNetworkStatus = useSelector(selectOrdersNetworkStatus);
  const orderList = useSelector(selectOrderList);
  const actions = useActions(OrdersSlice.actions);

  return {
    ...actions,
    orderList,
    ordersNetworkStatus,
  };
};
