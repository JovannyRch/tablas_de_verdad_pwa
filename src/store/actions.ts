import {
  Table,
  TableActionTypes,
  SET_EXPRESION,
  CLEAR_EXPRESION,
  ADD_LETTER,
  REMOVE_LETTER,
  SWITCH_CASE,
} from "./types";

// TypeScript infers that this function is returning SendMessageAction
export function setExpression(table: Table): TableActionTypes {
  return {
    type: SET_EXPRESION,
    payload: table,
  };
}

export function clearExpression(): TableActionTypes {
  return {
    type: CLEAR_EXPRESION,
  };
}

export function addLetter(letter: string): TableActionTypes {
  return {
    type: ADD_LETTER,
    payload: letter,
  };
}

export function removeLetter(): TableActionTypes {
  return {
    type: REMOVE_LETTER,
  };
}

export function switchCase(): TableActionTypes {
  return {
    type: SWITCH_CASE,
  };
}
