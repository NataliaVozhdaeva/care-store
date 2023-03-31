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

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
