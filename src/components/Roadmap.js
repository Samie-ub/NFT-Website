import { Container, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    padding: "5rem 0",
    backgroundColor: "#232526",
    color: "#fff",
  },
  heading: {
    textAlign: "center",

    width: "100%",
    paddingBottom: "5rem",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  box: {
    padding: "1rem  2rem ",
  },
  square: {
    border: "2px solid blue",
    padding: "2rem",
    borderRadius: "2px",
    // margin:'0 0 1rem 0'
  },
  squareText: {
    fontSize: "2rem",
    fontWeight: "bolder",
    color: "white",
    textAlign: "center",
  },
  squareSup: {
    color: "blue",
  },
  boxTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    // padding:'0 0 0 1rem'
  },
  lastBtn: {
    marginTop: "4rem",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    padding: "1rem 4rem",
    background: "linear-gradient(to right, #000046, #1cb5e0)",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderRadius: "0",
    color: "#fff",
  },
  boxContainer: {
    padding: "1rem",
  },
}));
function Roadmap() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Roadmap">
      <Container>
        <div className={classes.heading}>
          <Typography variant="h3" className={classes.title}>
            launch roadmap
          </Typography>
          <Typography variant="body1" className={classes.titlePara}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint vel
            omnis eius nisi voluptate quisquam debitis. Dolorem ipsum sed sequi
            quos ipsa.
          </Typography>
        </div>
        <Grid container alignItems="center" className={classes.box}>
          <Grid item sm={3} md={2}>
            <div className={classes.square}>
              <Typography className={classes.squareText}>
                O<sup className={classes.squareSup}>%</sup>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={9} md={10}>
            <Container className={classes.boxContainer}>
              <Typography className={classes.boxTitle} variant="h5">
                welcome let's board our rocket !
              </Typography>
              <Typography className={classes.boxPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, deleniti sunt nobis et quis alias sapiente
                voluptates assumenda architecto explicabo aspernatur maiores,
                consequuntur aperiam, illo ad esse. Repudiandae, illum non?
              </Typography>
            </Container>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.box}>
          <Grid item sm={3} md={2}>
            <div className={classes.square}>
              <Typography className={classes.squareText}>
                25<sup className={classes.squareSup}>%</sup>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={9} md={10}>
            <Container className={classes.boxContainer}>
              <Typography className={classes.boxTitle} variant="h5">
                preparing for our journey....
              </Typography>
              <Typography className={classes.boxPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, deleniti sunt nobis et quis alias sapiente
                voluptates assumenda architecto explicabo aspernatur maiores,
                consequuntur aperiam, illo ad esse. Repudiandae, illum non?
              </Typography>
            </Container>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.box}>
          <Grid item sm={3} md={2}>
            <div className={classes.square}>
              <Typography className={classes.squareText}>
                40<sup className={classes.squareSup}>%</sup>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={9} md={10}>
            <Container className={classes.boxContainer}>
              <Typography className={classes.boxTitle} variant="h5">
                let's take off to the fckin moon and howl !!!
              </Typography>
              <Typography className={classes.boxPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, deleniti sunt nobis et quis alias sapiente
                voluptates assumenda architecto explicabo aspernatur maiores,
                consequuntur aperiam, illo ad esse. Repudiandae, illum non?
              </Typography>
            </Container>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.box}>
          <Grid item sm={3} md={2}>
            <div className={classes.square}>
              <Typography className={classes.squareText}>
                60<sup className={classes.squareSup}>%</sup>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={9} md={10}>
            <Container className={classes.boxContainer}>
              <Typography className={classes.boxTitle} variant="h5">
                outside our earth !
              </Typography>
              <Typography className={classes.boxPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, deleniti sunt nobis et quis alias sapiente
                voluptates assumenda architecto explicabo aspernatur maiores,
                consequuntur aperiam, illo ad esse. Repudiandae, illum non?
              </Typography>
            </Container>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.box}>
          <Grid item sm={3} md={2}>
            <div className={classes.square}>
              <Typography className={classes.squareText}>
                80<sup className={classes.squareSup}>%</sup>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={9} md={10}>
            <Container className={classes.boxContainer}>
              <Typography className={classes.boxTitle} variant="h5">
                let's party in outer space baby!!
              </Typography>
              <Typography className={classes.boxPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, deleniti sunt nobis et quis alias sapiente
                voluptates assumenda architecto explicabo aspernatur maiores,
                consequuntur aperiam, illo ad esse. Repudiandae, illum non?
              </Typography>
            </Container>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.box}>
          <Grid item sm={3} md={2}>
            <div className={classes.square}>
              <Typography className={classes.squareText}>
                90<sup className={classes.squareSup}>%</sup>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={9} md={10}>
            <Container className={classes.boxContainer}>
              <Typography className={classes.boxTitle} variant="h5">
                time to clean up our rocket
              </Typography>
              <Typography className={classes.boxPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, deleniti sunt nobis et quis alias sapiente
                voluptates assumenda architecto explicabo aspernatur maiores,
                consequuntur aperiam, illo ad esse. Repudiandae, illum non?
              </Typography>
            </Container>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.box}>
          <Grid item sm={3} md={2}>
            <div className={classes.square}>
              <Typography className={classes.squareText}>
                100<sup className={classes.squareSup}>%</sup>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={9} md={10}>
            <Container className={classes.boxContainer}>
              <Typography className={classes.boxTitle} variant="h5">
                first step on the moon !!!
              </Typography>
              <Typography className={classes.boxPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, deleniti sunt nobis et quis alias sapiente
                voluptates assumenda architecto explicabo aspernatur maiores,
                consequuntur aperiam, illo ad esse. Repudiandae, illum non?
              </Typography>
            </Container>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.box}>
          <Grid item sm={3} md={2}>
            <div className={classes.square}>
              <Typography className={classes.squareText}>
                111<sup className={classes.squareSup}>%</sup>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={9} md={10}>
            <Container className={classes.boxContainer}>
              <Typography className={classes.boxTitle} variant="h5">
                first civilization
              </Typography>
              <Typography className={classes.boxPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, deleniti sunt nobis et quis alias sapiente
                voluptates assumenda architecto explicabo aspernatur maiores,
                consequuntur aperiam, illo ad esse. Repudiandae, illum non?
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <div className={classes.lastBtn}>
          <Button className={classes.btn} variant="contained">
            for the pack !!!
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Roadmap;
