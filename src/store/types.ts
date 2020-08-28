export interface Table {
  expression: string;
}

export const SET_EXPRESION = "SET_EXPRESION";
export const CLEAR_EXPRESION = "CLEAR_EXPRESION";
export const ADD_LETTER = "ADD_LETTER";
export const REMOVE_LETTER = "REMOVE_LETTER";

interface SetExpresionAction {
  type: typeof SET_EXPRESION;
  payload: Table;
}

interface AddLetterAction {
  type: typeof ADD_LETTER;
  payload: string;
}

interface ClearExpressionAction {
  type: typeof CLEAR_EXPRESION;
}

interface RemoveLetterAction {
  type: typeof REMOVE_LETTER;
}

export type TableActionTypes =
  | SetExpresionAction
  | ClearExpressionAction
  | AddLetterAction
  | RemoveLetterAction;
