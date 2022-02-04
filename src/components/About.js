import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#232526",
    height: "100%",
    padding: "5rem 0",
  },
  aboutImg: {
    width: "100%",
  },
  aboutPara: {
    fontSize: "1.2rem",
    color: "#fff",
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
  },
  aboutHeading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: "1rem",
    marginBottom: "1rem",
  },
  aboutSpan: {
    color: "#24C6DC",
  },
  paraContainer: {
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "0rem",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="About">
      <Container>
        <Grid container alignItems="center">
          <Grid item sm={12} md={6}>
            <img
              className={classes.aboutImg}
              src={require("../assets/2.jpg")}
              alt="moutain"
            />
          </Grid>

          <Grid item className={classes.aboutPara} xs={12} md={6}>
            <Typography className={classes.aboutHeading} variant="h5">
              <span className={classes.aboutSpan}>Wellcome to</span> crypto
              wolves club !
            </Typography>
            <Typography className={classes.aboutPara} variant="body1">
              <Container className={classes.paraContainer}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione iusto asperiores perferendis voluptatem maxime nisi ab
                excepturi error id, soluta officiis, dignissimos itaque optio,
                at obcaecati eius blanditiis reprehenderit corrupti consectetur
                eveniet. Exercitationem facilis dolorem sint numquam accusantium
                velit officia tempora ad in harum, iusto alias excepturi fugiat
                consequatur eaque voluptas. Ipsum corporis rerum consectetur,
                molestiae dolore repellendus sunt voluptatum! Voluptatem quas
                blanditiis esse sint facilis numquam, dolorem sequi voluptate
                explicabo rerum ab quasi quibusdam exercitationem tenetur nisi
              </Container>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
