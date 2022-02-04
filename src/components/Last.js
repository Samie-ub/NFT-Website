import { Container, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    padding: "5rem 0 0rem 0",
    color: "#fff",
  },
  lastIcons: {
    width: "100%",
    textAlign: "center",
    padding: "1rem 0",
  },
  finalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  icons: {
    fontSize: "2.5rem",
    margin: "0 10px",
    cursor: "pointer",
    color: "white",
    "&:hover": {
      color: "#185a9d",
      transition: ".3s",
    },
  },
  lastDes: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 0",
    textTransform: "capitalize",
  },
}));
function Last() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.finalContainer}>
          <div>
            <img src={require("../assets/brand_footer.png")} alt="" />
            <div className={classes.lastIcons}>
              <Link>
                <FacebookIcon className={classes.icons} />
              </Link>
              <Link>
                <InstagramIcon className={classes.icons} />
              </Link>
              <Link>
                <TwitterIcon className={classes.icons} />
              </Link>
              <Link>
                <GitHubIcon className={classes.icons} />
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <Typography className={classes.lastDes}>
          <CopyrightIcon /> 2021 crypto wolves club . all right reserve
        </Typography>
      </Container>
    </div>
  );
}

export default Last;
