import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import { Link } from "react-scroll";
import { makeStyles, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "black",
  },
  navLinks: {
    padding: "0 1rem",
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
  navBox: {
    display:'flex',
    justifyContent:'center',
    padding:'1rem 3rem 1rem 1rem',
    width:'100vw',
    marginTop:'1rem',
    textAlign:'center',
    '&:hover':{
      backgroundColor:'gray'
    }
  },

  menuBox:{
    margin:'0 auto'
  },
  socialIcons: {
    color: "white",
    "&:hover": {
      backgroundColor: "#fff",
      color: "black",
      transition: ".3s",
    },
  },
  menuLinks:{ 
    color:'black',
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: "700",
    textAlign:'center',
    padding:'0 5rem',
    "&:hover": {
      textDecoration: "none",
      color: "#24C6DC",
      transition: ".5s",
    },
  },
  menuBtn:{
margin:'2rem',

  },
  menuIconsBox:{
    display:'flex',
    justifyContent:'center',

  },
  menuIcons:{
    color: "black",
    fontSize:'2rem',

    "&:hover": {
      backgroundColor: "#fff",
      color: "#24C6DA",
      transition: ".3s",
      borderBottom:'2px solid #24C6DC'
     
    },
  },
  menuContainer:{
    paddingTop:'2rem'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      
        <Toolbar disableGutters>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
            <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={classes.navLinks}
                >
                  <img src={require("../assets/brand.png")} alt="" />
                </Link>
            </Grid>
            <Grid item>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className={classes.navLinks}
                  delay={100}
                >
                  ABOUT
                </Link>

                <Link
                  activeClass="active"
                  to="Features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className={classes.navLinks}
                  delay={100}
                >
                  feature
                </Link>
                <Link
                  activeClass="active"
                  to="Roadmap"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className={classes.navLinks}
                  delay={100}
                >
                  roadmap
                </Link>
                <Link
                  activeClass="active"
                  to="Team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  delay={100}
                  className={classes.navLinks}
                >
                  team
                </Link>
                <Link
                  activeClass="active"
                  to="Faq"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  delay={100}
                  className={classes.navLinks}
                >
                  faq
                </Link>
              </Box>
            </Grid>
            <Grid item >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
              <IconButton className={classes.socialIcons}>
                <FacebookIcon />
              </IconButton>
              <IconButton className={classes.socialIcons}>
                <InstagramIcon />
              </IconButton>
              <IconButton className={classes.socialIcons}>
                <TwitterIcon />
              </IconButton>
              </Box>
           
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <div className={classes.menuContainer}>
                <Menu
                className={classes.menuBox}
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                
                  keepMounted
                
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
            
                  }}
                >
                  <Typography className={classes.navBox} >
                    <Link
                      activeClass="active"
                      to="About"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={600}
                      className={classes.menuLinks}
                      delay={100}
                      onClick={handleCloseNavMenu}
                    >
                      ABOUT
                    </Link>
                  </Typography>
                  <Typography className={classes.navBox} >
                    <Link
                      activeClass="active"
                      to="Features"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={600}
                      className={classes.menuLinks}
                      delay={100}
                      onClick={handleCloseNavMenu}
                    >

                      Features
                    </Link>
                    </Typography>

                    <Typography className={classes.navBox} >
                    <Link
                  activeClass="active"
                  to="Roadmap"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className={classes.menuLinks}
                  delay={100}
                  onClick={handleCloseNavMenu}

                >
                  roadmap
                </Link>
                    </Typography>

                    <Typography className={classes.navBox} >
                    <Link
                  activeClass="active"
                  to="Team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  delay={100}
                  className={classes.menuLinks}
                  onClick={handleCloseNavMenu}

                >
                  team
                </Link>
                      </Typography>

                      <Typography className={classes.navBox} >
                      <Link
                  activeClass="active"
                  to="Faq"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  delay={100}
                  className={classes.menuLinks}
                  onClick={handleCloseNavMenu}

                >
                  faq
                </Link>
                      </Typography>

                    <Box className={classes.menuIconsBox}>
                    <IconButton className={classes.menuBtn}>
                <FacebookIcon className={classes.menuIcons} />
              </IconButton>
              <IconButton  className={classes.menuBtn}>
                <InstagramIcon className={classes.menuIcons}  />
              </IconButton>
              <IconButton  className={classes.menuBtn}>
                <TwitterIcon className={classes.menuIcons}  />
              </IconButton>
                    </Box>
                </Menu>

                </div>
                             </Box>
            </Grid>
          </Grid>
        </Toolbar>
    </AppBar>
  );
};
export default Navbar;
