import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    padding: "5rem 0",
  },
  featuresImg: {
    width: "100%",
    border: "4px solid #1cb5e0",
  },
  featureHeading: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  featurePara: {
    lineHeight: "2rem",
    color: "#e0e0e0",
    // [theme.breakpoints.between("xs", "sm")]: {
    //   padding: "1rem 0",
    // },
  },
}));
function Features() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Features">
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <img
              src={require("../assets/3.jpg")}
              alt="moutain"
              className={classes.featuresImg}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              <Typography className={classes.featureHeading} variant="h4">
                legendary wolves
              </Typography>
              <Typography variant="body1" className={classes.featurePara}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores corporis labore adipisci cupiditate et, doloribus
                similique error nam repellendus dolore? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Repellat labore minima,
                consequuntur optio iusto quaerat. Excepturi officia consectetur
                minima a.
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Grid container alignItems="center" wrap="wrap-reverse">
          <Grid item xs={12} sm={6}>
            <Container>
              <Typography className={classes.featureHeading} variant="h4">
                the biggest wolf-whale
              </Typography>
              <Typography variant="body1" className={classes.featurePara}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores corporis labore adipisci cupiditate et, doloribus
                similique error nam repellendus dolore? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Veritatis labore perspiciatis
                rem maxime error culpa consectetur fugit eum ad, facere
                blanditiis, numquam ratione amet ut repudiandae ab, deserunt
                earum dolor!
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={require("../assets/4.jpg")}
              alt="moutain"
              className={classes.featuresImg}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Features;
