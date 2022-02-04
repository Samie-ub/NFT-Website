import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "black",
    padding: "5rem 0",
    color: "#fff",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "5rem 1rem",
    },
  },
  heading: {
    textAlign: "center",
    margin: "0 auto",
    width: "70vw",
    paddingBottom: "5rem",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      margin: "0 0",
    },
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "2rem",
    },
  },
  boxContainer: {
    border: "1px solid #4286f4",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "1rem 0",
    },
  },
  boxTitle: {
    backgroundColor: "#0000ff54",
    padding: "2rem",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
  },
  boxDetail: {
    padding: "1rem 2rem",
  },
  boxPara: {
    lineHeight: "2rem",
    fontWeigth: "bold",
  },
}));
function Development() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Development">
      <Container>
        <div className={classes.heading}>
          <Typography variant="h3" className={classes.title}>
            development roadmap
          </Typography>
          <Typography variant="body1" className={classes.titlePara}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint vel
            omnis eius nisi voluptate quisquam debitis. Dolorem ipsum sed sequi
            quos ipsa.
          </Typography>
        </div>
        <Grid container className={classes.boxContainer} spacing={0}>
          <Grid item xs={12} sm={12} md={3} className={classes.boxTitle}>
            <Typography variant="h6">Investment</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={9} className={classes.boxDetail}>
            <Typography className={classes.boxPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              necessitatibus officia deserunt, suscipit similique maxime et
              quisquam cum, illum ipsum error maiores ducimus corrupti fugiat
              exercitationem fuga eligendi reiciendis blanditiis iure nemo in.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.boxContainer} spacing={0}>
          <Grid item xs={12} sm={12} md={3} className={classes.boxTitle}>
            <Typography variant="h6">Investment</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={9} className={classes.boxDetail}>
            <Typography className={classes.boxPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              necessitatibus officia deserunt, suscipit similique maxime et
              quisquam cum, illum ipsum error maiores ducimus corrupti fugiat
              exercitationem fuga eligendi reiciendis blanditiis iure nemo in.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.boxContainer} spacing={0}>
          <Grid item xs={12} sm={12} md={3} className={classes.boxTitle}>
            <Typography variant="h6">Investment</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={9} className={classes.boxDetail}>
            <Typography className={classes.boxPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              necessitatibus officia deserunt, suscipit similique maxime et
              quisquam cum, illum ipsum error maiores ducimus corrupti fugiat
              exercitationem fuga eligendi reiciendis blanditiis iure nemo in.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.boxContainer} spacing={0}>
          <Grid item xs={12} sm={12} md={3} className={classes.boxTitle}>
            <Typography variant="h6">Investment</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={9} className={classes.boxDetail}>
            <Typography className={classes.boxPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              necessitatibus officia deserunt, suscipit similique maxime et
              quisquam cum, illum ipsum error maiores ducimus corrupti fugiat
              exercitationem fuga eligendi reiciendis blanditiis iure nemo in.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.boxContainer} spacing={0}>
          <Grid item xs={12} sm={12} md={3} className={classes.boxTitle}>
            <Typography variant="h6">Investment</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={9} className={classes.boxDetail}>
            <Typography className={classes.boxPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              necessitatibus officia deserunt, suscipit similique maxime et
              quisquam cum, illum ipsum error maiores ducimus corrupti fugiat
              exercitationem fuga eligendi reiciendis blanditiis iure nemo in.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Development;
