import { createAction } from '@reduxjs/toolkit';
import { Character } from '../models/character';
import { actionTypes } from './action.types';

export const loadActionCreate = createAction<Array<Character>>(
    actionTypes.load
); //x es un nuevo objeto de tipo actioncreator que devuelve un objeto
//creact que le demosun actiontype sctring para que el cree el tipo de accion que va a utilizar
//reciben como parametro el tipo correspondiente al string que van a utilizar
export const addActionCreate = createAction<Character>(actionTypes.add); //array no porque va a añadir UNA tarea, y en lo siguiente igual
export const updateActionCreate = createAction<Character>(actionTypes.update);
export const deleteActionCreate = createAction<Character>(actionTypes.delete);
