import * as React from "react";
import "./index.css";
import { ButtonVar } from "../ButtonVar";
import { Grid } from "@material-ui/core";

export interface IButtonsLayerProps {}

export function SideLayer(props: IButtonsLayerProps) {
  return (
    <div className="buttons-layer">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ButtonVar color={true} name={"¬"}></ButtonVar>
        </Grid>
        <Grid item xs={12}>
          <ButtonVar color={true} name={"∨"}></ButtonVar>
        </Grid>
        <Grid item xs={12}>
          <ButtonVar color={true} name={"∧"}></ButtonVar>
        </Grid>
        <Grid item xs={12}>
          <ButtonVar color={true} name={"⇒"}></ButtonVar>
        </Grid>
        <Grid item xs={12}>
          <ButtonVar color={true} name={"￩"}></ButtonVar>
        </Grid>
      </Grid>
    </div>
  );
}
