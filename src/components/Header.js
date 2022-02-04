import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// Component Styling Starts here
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    backgroundColor: "#0000003d",
  },

  appbar: {
    background: "black",
    width: "100vw",
  },

  navLinks: {
    margin: "0 1rem",
    color: "white",
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: "700",
    "&:hover": {
      textDecoration: "none",
      color: "#24C6DC",
      transition: ".5s",
    },
  },

  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: ".3rem 0",
  },

  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    minHeight: "100vh",
    width: "100vw",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/1.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  btn: {
    padding: "1rem 4rem",
    fontSize: "bold",
    textTransform: "uppercase",
    background: " linear-gradient(to right, #5433ff, #20bdff)",
    border: "2px solid #24C6DC",
    marginBottom: "10rem",
    color: "#fff",
    borderRadius: "0",
  },
  socialIcons: {
    color: "white",
    "&:hover": {
      backgroundColor: "#fff",
      color: "black",
      transition: ".3s",
    },
  },

  menuitem: {
    border: "1px solid red",
    padding: " 1rem 0",
    margin: "0rem",
    backgroundColor: "black",
    height: "10rem",
    display: "block",
  },
  menuBtn: {
    backgroundColor: "red",
  },
}));

// Component Styling Ends here

// Component Functionalties Starts here

function Header() {
  const classes = useStyles();

  return (
    // Component Elements Starts Here
    <div className={classes.root} id="Home">
      <div className={classes.btnContainer}>
        <Button className={classes.btn} variant="contained">
          view on opensea
        </Button>
      </div>
    </div>
    // Component Elements Ends Here
  );
}
// Component Functionalties Ends here

export default Header;
