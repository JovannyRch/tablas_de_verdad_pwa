import * as React from "react";
import "./index.css";
import { Button, withStyles } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  },
}))(Button);
export interface IButtonResultProps {
  handler: Function;
}

export function ButtonResult(props: IButtonResultProps) {
  const { handler } = props;
  return (
    <div className="btnResult" onClick={() => handler()}>
      <ColorButton style={{ color: "white", height: "15vh" }}>=</ColorButton>
    </div>
  );
}
