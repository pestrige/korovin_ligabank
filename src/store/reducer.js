import { createReducer } from '@reduxjs/toolkit';
import {
  setSendingFlag,
  setLoaded,
  loadRates,
  updateHistory,
  setDate,
  clearHistory,
  setError
} from './action';

const initialState = {
  isSending: false,
  isLoaded: false,
  rates: {
    rub: 1,
    usd: 1,
    eur: 1,
    gbr: 1,
    cny: 1,
  },
  history: [],
  date: new Date(),
  error: {
    isShown: false,
    message: '',
  },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSendingFlag, (state, action) => {
      state.isSending = action.payload;
    })
    .addCase(setLoaded, (state, action) => {
      state.isLoaded = action.payload;
    })
    .addCase(loadRates, (state, action) => {
      state.rates = action.payload;
    })
    .addCase(updateHistory, (state, action) => {
      state.history = action.payload;
    })
    .addCase(setDate, (state, action) => {
      state.date = action.payload;
    })
    .addCase(clearHistory, (state) => {
      state.history = [];
    })
    .addCase(setError, (state, {payload}) => {
      state.error = {isShown: payload.isShown, message: payload.message};
    });
});
