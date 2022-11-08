import { createReducer } from '@reduxjs/toolkit';
import { Character } from '../models/character';
import * as ac from './action.creators';

const initialState: Array<Character> = [];

export const CharacterReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreate, (_state, action) => action.payload);
    builder.addCase(ac.addActionCreate, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateActionCreate, (state, action) =>
        state.map((item) =>
            item.name === action.payload.name ? action.payload : item
        )
    );
    builder.addCase(ac.deleteActionCreate, (state, action) =>
        state.filter((item) => item.name !== action.payload.name)
    );

    builder.addDefaultCase((state) => state);
});
