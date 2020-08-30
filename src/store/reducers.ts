import {
  Table,
  TableActionTypes,
  CLEAR_EXPRESION,
  SET_EXPRESION,
  ADD_LETTER,
  REMOVE_LETTER,
  SWITCH_CASE,
} from "./types";

const initialState: Table = {
  expression: "A+B",
  inCapitalLetters: true,
};

export function tableReducer(
  state = initialState,
  action: TableActionTypes
): Table {
  switch (action.type) {
    case SET_EXPRESION:
      return { ...state, expression: action.payload.expression };
    case CLEAR_EXPRESION:
      return { ...state, expression: "" };
    case ADD_LETTER:
      return { ...state, expression: state.expression + action.payload };
    case REMOVE_LETTER:
      return {
        ...state,
        expression: state.expression.substring(0, state.expression.length - 1),
      };
    case SWITCH_CASE:
      return {
        ...state,
        inCapitalLetters: !state.inCapitalLetters,
      };
    default:
      return state;
  }
}
