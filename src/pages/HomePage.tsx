import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ButtonsLayer } from "../components/ButtonsLayer";
import Screen from "../components/Screen";
import { SideLayer } from "../components/SideLayer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [expresion, setExpresion] = useState("");

  const handleChangeExpression = (val: string) => {
    setExpresion(val);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Screen content={"Hola"} />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <ButtonsLayer />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper2}>
            <SideLayer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
