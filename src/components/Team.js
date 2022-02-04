import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: "5rem 0",
    backgroundColor: "#232526",
    color: "#fff",
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
  teamImg: {
    width: "100%",
  },
  teamName: {
    textTransform: "uppercase",
    fontWeight: "bolder",
    color: "white",
    fontSize: "1.5rem",
  },
  teamDes: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#2193b0",
  },
}));
function Team() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Team">
      <Container>
        <div className={classes.heading}>
          <Typography variant="h3" className={classes.title}>
            Our Team
          </Typography>
          <Typography variant="body1" className={classes.titlePara}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint vel
            omnis eius nisi voluptate quisquam debitis. Dolorem ipsum sed sequi
            quos ipsa.
          </Typography>
        </div>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <img
                className={classes.teamImg}
                src={require("../assets/2.jpg")}
                alt="moutain"
              />
              <Typography className={classes.teamName}>mikos</Typography>
              <Typography variant="h6" className={classes.teamDes}>
                blockchain expert
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <img
                className={classes.teamImg}
                src={require("../assets/4.jpg")}
                alt="moutain"
              />
              <Typography className={classes.teamName}>mikos</Typography>
              <Typography variant="h6" className={classes.teamDes}>
                blockchain expert
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <img
                className={classes.teamImg}
                src={require("../assets/2.jpg")}
                alt="moutain"
              />
              <Typography className={classes.teamName}>mikos</Typography>
              <Typography variant="h6" className={classes.teamDes}>
                blockchain expert
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <img
                className={classes.teamImg}
                src={require("../assets/3.jpg")}
                alt="moutain"
              />
              <Typography className={classes.teamName}>mikos</Typography>
              <Typography variant="h6" className={classes.teamDes}>
                blockchain expert
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <img
                className={classes.teamImg}
                src={require("../assets/2.jpg")}
                alt="moutain"
              />
              <Typography className={classes.teamName}>mikos</Typography>
              <Typography variant="h6" className={classes.teamDes}>
                blockchain expert
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <img
                className={classes.teamImg}
                src={require("../assets/4.jpg")}
                alt="moutain"
              />
              <Typography className={classes.teamName}>mikos</Typography>
              <Typography variant="h6" className={classes.teamDes}>
                blockchain expert
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <img
                className={classes.teamImg}
                src={require("../assets/2.jpg")}
                alt="moutain"
              />
              <Typography className={classes.teamName}>mikos</Typography>
              <Typography variant="h6" className={classes.teamDes}>
                blockchain expert
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <img
                className={classes.teamImg}
                src={require("../assets/3.jpg")}
                alt="moutain"
              />
              <Typography className={classes.teamName}>mikos</Typography>
              <Typography variant="h6" className={classes.teamDes}>
                blockchain expert
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default Team;
