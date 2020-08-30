export interface Table {
  expression: string;
  inCapitalLetters: Boolean;
}

export const SET_EXPRESION = "SET_EXPRESION";
export const CLEAR_EXPRESION = "CLEAR_EXPRESION";
export const ADD_LETTER = "ADD_LETTER";
export const REMOVE_LETTER = "REMOVE_LETTER";
export const SWITCH_CASE = "SWITCH_CASE";

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

interface SwitchCaseAction {
  type: typeof SWITCH_CASE;
}

export type TableActionTypes =
  | SetExpresionAction
  | ClearExpressionAction
  | AddLetterAction
  | RemoveLetterAction
  | SwitchCaseAction;
