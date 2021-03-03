import React, {　useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://twitter.com/home?lang=ja"
        target="brank"
        rel="noopener"
      >
        卓也
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide({ setName }) {
  const classes = useStyles();
  const[disabled,setDisabled]= useState(true);
  const[string,setString]= useState('');
  const[isComposed,setIsComposed] =useState(false)
   console.log(disabled, string,isComposed);

  useEffect(()=>{
    const disabled = string === ''
    setDisabled(disabled)
  },[string]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              onChange={(e)=>setString(e.target.value)}
              onKeyDown={(e)=>{
               if (isComposed) return;
               
                if(e.key === 'Enter'){
                  setName(e.target.value);
                e.preventDefault();
                }
              }}
              onCompositionStart={() =>
                setIsComposed(true)
              }
              onCompositionEnd={() =>
                setIsComposed(false)
              }
            />

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disabled}
              onClick={()=>{
                setName(string)
              }}
            >
              はじめる
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
