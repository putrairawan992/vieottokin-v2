import { SERVICE_FILTER, SERVICE_FILTER_RESET } from '../types';

export const setFilter = payload => ({ type: SERVICE_FILTER, payload });
export const resetFilter = payload => ({ type: SERVICE_FILTER_RESET, payload });
