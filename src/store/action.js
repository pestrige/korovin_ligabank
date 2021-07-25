import { createAction } from '@reduxjs/toolkit';
import { adaptRates, formatDate, getUrl } from '../utils/common';

const ActionType = {
  SET_SENDING_FLAG: 'setSendingFlag',
  SET_LOADED: 'setLoaded',
  LOAD_RATES: 'loadRates',
  UPDATE_HISTORY: 'updateHistory',
  CLEAR_HISTORY: 'clearHistory',
  SET_DATE: 'setDate',
  SET_ERROR: 'setError',
};

export const setSendingFlag = createAction(ActionType.SET_SENDING_FLAG, (flag) => ({payload: flag}));
export const setLoaded = createAction(ActionType.SET_LOADED, (flag) => ({payload: flag}));
export const loadRates = createAction(ActionType.LOAD_RATES, (rates) => ({payload: rates}));
export const updateHistory = createAction(ActionType.UPDATE_HISTORY, (history) => ({payload: history}));
export const clearHistory = createAction(ActionType.CLEAR_HISTORY);
export const setDate = createAction(ActionType.SET_DATE, (date) => ({payload: date}));
export const setError = createAction(ActionType.SET_ERROR, (error) => ({payload: error}));

export const fetchRates = (date) => (dispatch, _getState) => {
  const adaptedDate = formatDate(date);
  const url = getUrl(adaptedDate);

  return fetch(url, {mode: 'cors'})
    .then((response) => response.json())
    .then((data) => {
      const rates = adaptRates(data);
      dispatch(setSendingFlag(false));
      dispatch(loadRates(rates));
      dispatch(setDate(data.Date));
    })
    .catch(() => {
      dispatch(setSendingFlag(false));
      dispatch(setError({
        isShown: true,
        message: 'Ошибка сервера, попробуйте позднее',
      }));
    });
};
