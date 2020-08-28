import {
  Table,
  TableActionTypes,
  SET_EXPRESION,
  CLEAR_EXPRESION,
} from "./types";

// TypeScript infers that this function is returning SendMessageAction
export function setExpression(table: Table): TableActionTypes {
  return {
    type: SET_EXPRESION,
    payload: table,
  };
}

export function deleteMessage(): TableActionTypes {
  return {
    type: CLEAR_EXPRESION,
  };
}
