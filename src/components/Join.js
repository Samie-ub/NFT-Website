import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/2.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  overlay: {
    height: "100%",
    padding: "7rem 0",
    backgroundColor: "#0000009c",
  },
  lastContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  lastItem: {
    textAlign: "center",
  },
  lastHeading: {
    fontSize: "2.5rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    paddingBottom: "2rem",
  },
  lastBtn: {
    background: "linear-gradient(to right, #43cea2, #185a9d)",
    fontSize: "1.1rem",
    fontWeight: "bold",
    padding: "1rem 4rem",
    color: "#fff",
  },
}));

function Join() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <Container className={classes.lastContainer}>
          <div className={classes.lastItem}>
            <Typography className={classes.lastHeading}>
              join the pack on discord
            </Typography>
            <Button className={classes.lastBtn} variant="contained">
              lets start
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Join;
