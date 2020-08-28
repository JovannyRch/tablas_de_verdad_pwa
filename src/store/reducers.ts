import {
  Table,
  TableActionTypes,
  CLEAR_EXPRESION,
  SET_EXPRESION,
} from "./types";

const initialState: Table = {
  expression: "A+B",
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
    default:
      return state;
  }
}
