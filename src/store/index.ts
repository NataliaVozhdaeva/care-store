import { combineReducers, configureStore } from '@reduxjs/toolkit';
import goodReducer from './slices/goodSlice';

const rootReducer = combineReducers({
  good: goodReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
