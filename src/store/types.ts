export interface Table {
  expression: string;
}

export const SET_EXPRESION = "SET_EXPRESION";
export const CLEAR_EXPRESION = "CLEAR_EXPRESION";

interface SetExpresionAction {
  type: typeof SET_EXPRESION;
  payload: Table;
}

interface ClearExpressionAction {
  type: typeof CLEAR_EXPRESION;
}

export type TableActionTypes = SetExpresionAction | ClearExpressionAction;
