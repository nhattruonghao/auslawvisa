import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    menuMobile: false,
    popupLanguage: true,
  };

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMenuMobile: (state) => {
            state.menuMobile = !state.menuMobile
        },
        closeMenuMobile: (state) => {
            state.menuMobile = false;
        },
        openMenuMobile: (state) => {
            state.menuMobile = true;
        },
        togglePopupLanguage: (state) => {
            state.popupLanguage = !state.popupLanguage
        }
    }
});

export const selectMenuMobile = (state) => state.ui.menuMobile;
export const selectPopupLanguage = (state) => state.ui.popupLanguage;
export const {closeMenuMobile, openMenuMobile, toggleMenuMobile, togglePopupLanguage} = uiSlice.actions;

export default uiSlice.reducer

