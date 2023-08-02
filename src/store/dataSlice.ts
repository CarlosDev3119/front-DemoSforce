import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        checking: '',
        data: {}
    },
    reducers: {
        onLoading: ( state ) => {
           state.checking = 'cheking';
        },
        onFinishLoading: ( state ) => {
           state.checking = '';
        },
        onSetData: ( state, { payload } ) => {
            state.data = payload;
        },
        onClearData: ( state ) => {
            state.data = {};
           state.checking = '';;

        }
      
    }
});

export const { 
    onLoading,
    onFinishLoading,
    onSetData,
    onClearData, 
} = dataSlice.actions;