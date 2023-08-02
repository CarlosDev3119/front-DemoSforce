import { createSlice } from "@reduxjs/toolkit";

export const fileSlice = createSlice({
    name: 'files',
    initialState: {
      
        rfc:'',
        fiel: '',
        acta: '',
        comprobante:'',
        accionaria: '',
        accionaria2: '',
        accionaria3: '',


    },
    reducers: {
        onSetRfc: ( state, { payload } ) => {
           state.rfc = payload;
        },
        onSetFiel: ( state, { payload } ) => {
            state.fiel = payload;
        },
        onSetActa: ( state, { payload } ) => {
            state.acta = payload;
        },
        onSetComprobante: ( state, { payload } ) => {
            state.comprobante = payload;
        },
        onSetAccionaria: ( state, { payload } ) => {
            state.accionaria = payload;
        },
        onSetAccionaria2: ( state, { payload } ) => {
            state.accionaria2 = payload;
        },
        onSetAccionaria3: ( state, { payload } ) => {
            state.accionaria3 = payload;
        },
      
      
    }
});

export const { onSetRfc, onSetFiel, onSetActa, onSetComprobante, onSetAccionaria, onSetAccionaria2, onSetAccionaria3 } = fileSlice.actions;