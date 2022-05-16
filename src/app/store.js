import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/language/languageSlice';
import uiReducer from '../features/Ui/uiSlice';

export const store = configureStore({
  reducer: {
    language : languageReducer,
    ui: uiReducer,
  },
});
