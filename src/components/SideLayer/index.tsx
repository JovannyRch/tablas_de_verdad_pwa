import * as React from "react";
import "./index.css";
import { ButtonVar } from "../ButtonVar";
import { Grid } from "@material-ui/core";
import { ButtonResult } from "../ButtonResult";
import { RootStateTable } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { switchCase } from "../../store/actions";

export interface IButtonsLayerProps {}

export function SideLayer(props: IButtonsLayerProps) {
  const handlerGoResult = () => {};
  const { inCapitalLetters } = useSelector(
    (state: RootStateTable) => state.table
  );

  const dispatch = useDispatch();
  const handleSwitchCase = () => {
    dispatch(switchCase());
  };

  return (
    <div className="buttons-layer">
      <Grid container spacing={2} alignItems="flex-start" direction="column">
        <br />
        <br />
        <br />

        <Grid item xs={3}>
          <ButtonVar color={true} handler={handleSwitchCase}>
            {inCapitalLetters ? <span>abc</span> : <span>ABC</span>}
          </ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonVar color={true} name={"~"}></ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonVar color={true} name={"¬"}></ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonVar color={true} name={"∨"}></ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonVar color={true} name={"∧"}></ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonVar color={true} name={"⇒"}></ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonVar color={true} name={"￩"}></ButtonVar>
        </Grid>
        <Grid item xs={3}>
          <ButtonResult handler={handlerGoResult} />
        </Grid>
      </Grid>
    </div>
  );
}
