import * as React from "react";
import "./index.css";
import { ButtonVar } from "../ButtonVar";
import { Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import BackspaceIcon from "@material-ui/icons/Backspace";
import { useDispatch } from "react-redux";
import { clearExpression, removeLetter } from "../../store/actions";
import { orange } from "@material-ui/core/colors";

export interface IButtonsLayerProps {}

export function ButtonsLayer(props: IButtonsLayerProps) {
  const vars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearExpression());
  };

  const handleRemoveLastChar = () => {
    dispatch(removeLetter());
  };

  return (
    <div className="buttons-layer">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ButtonVar color={true} handler={handleClear}>
            <DeleteIcon style={{ color: orange[500] }} />
          </ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonVar color={true} handler={handleRemoveLastChar}>
            <BackspaceIcon />
          </ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"("} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={")"} color={true} />
        </Grid>
        {vars.split("").map((v) => (
          <Grid item xs={3} key={v}>
            <ButtonVar name={v} />
          </Grid>
        ))}
        <Grid item xs={3}>
          <ButtonVar name={"["} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"]"} color={true} />
        </Grid>

        <Grid item xs={3}>
          <ButtonVar name={"⊕"} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"⊻"} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"⊼"} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"↓"} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"⇏"} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"⇍"} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"┲"} color={true} />
        </Grid>
        <Grid item xs={3}>
          <ButtonVar name={"┹"} color={true} />
        </Grid>
      </Grid>
    </div>
  );
}
