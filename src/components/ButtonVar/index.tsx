import * as React from "react";
import "./index.css";
import { Button, withStyles, colors } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addLetter } from "../../store/actions";
import { green, purple, orange } from "@material-ui/core/colors";

export interface IButtonProps {
  name?: string;
  handler?: Function;
  children?: React.ReactNode;
  color?: Boolean;
}

export function ButtonVar(props: IButtonProps) {
  const { name, handler, children, color } = props;

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "black",
      borderColor: orange[200],
      "&:hover": {
        backgroundColor: orange[100],
        borderColor: orange[300],
      },
      backgroundColor: color ? orange[50] : "white",
      height: "3rem",
      fontSize: "1.2rem",
    },
  }))(Button);

  const dispatch = useDispatch();
  const handleClick = () => {
    if (handler) {
      handler();
    } else {
      dispatch(addLetter(name || ""));
    }
  };
  return (
    <div className="button-var">
      <ColorButton
        variant="outlined"
        size="small"
        color="primary"
        onClick={handleClick}
      >
        {name ? name : children}
      </ColorButton>
    </div>
  );
}
