import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: "5rem 5rem",
    width: "100%",
    background: "black",
    color: "#fff",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "5rem 0",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bolder",
    textTransform: "uppercase",
  },
  cardHead: {
    backgroundColor: "#232526",
    padding: "1rem ",
    color: "#fff",
    border: "1px solid #185a9d",
    "&:hover": {
      background: "linear-gradient(to right, #43cea2, #185a9d)",
    },
  },
  headingQuestion: {
    textAlign: "center",
    margin: "0 auto",
    width: "50vw",
    paddingBottom: "5rem",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0",
      width: "100%",
      padding: "0 1rem",
    },
  },
  titleQuestion: {
    textTransform: "uppercase",
    fontWeight: "bold",
    [theme.breakpoints.between("xs", "sm")]: {
      paddingBottom: "2rem",
      fontSize: "2rem",
    },
  },
  cardDetail: {
    backgroundColor: "black",
    color: "#fff",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="Faq">
      <div className={classes.headingQuestion}>
        <Typography variant="h3" className={classes.titleQuestion}>
          frequently asked questions
        </Typography>
      </div>
      <Container>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.cardHead}
          >
            <Typography className={classes.heading}>
              what are cryptowolves nfts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.cardDetail}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat cupiditate aut, molestiae sapiente odio accusantium
              necessitatibus vel nostrum cum nesciunt exercitationem incidunt!
              Quibusdam corrupti cumque iste repellendus obcaecati vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.cardHead}
          >
            <Typography className={classes.heading}>
              what are cryptowolves nfts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.cardDetail}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat cupiditate aut, molestiae sapiente odio accusantium
              necessitatibus vel nostrum cum nesciunt exercitationem incidunt!
              Quibusdam corrupti cumque iste repellendus obcaecati vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.cardHead}
          >
            <Typography className={classes.heading}>
              what are cryptowolves nfts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.cardDetail}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat cupiditate aut, molestiae sapiente odio accusantium
              necessitatibus vel nostrum cum nesciunt exercitationem incidunt!
              Quibusdam corrupti cumque iste repellendus obcaecati vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.cardHead}
          >
            <Typography className={classes.heading}>
              what are cryptowolves nfts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.cardDetail}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat cupiditate aut, molestiae sapiente odio accusantium
              necessitatibus vel nostrum cum nesciunt exercitationem incidunt!
              Quibusdam corrupti cumque iste repellendus obcaecati vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.cardHead}
          >
            <Typography className={classes.heading}>
              what are cryptowolves nfts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.cardDetail}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat cupiditate aut, molestiae sapiente odio accusantium
              necessitatibus vel nostrum cum nesciunt exercitationem incidunt!
              Quibusdam corrupti cumque iste repellendus obcaecati vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.cardHead}
          >
            <Typography className={classes.heading}>
              what are cryptowolves nfts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.cardDetail}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat cupiditate aut, molestiae sapiente odio accusantium
              necessitatibus vel nostrum cum nesciunt exercitationem incidunt!
              Quibusdam corrupti cumque iste repellendus obcaecati vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.cardHead}
          >
            <Typography className={classes.heading}>
              what are cryptowolves nfts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.cardDetail}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat cupiditate aut, molestiae sapiente odio accusantium
              necessitatibus vel nostrum cum nesciunt exercitationem incidunt!
              Quibusdam corrupti cumque iste repellendus obcaecati vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.cardHead}
          >
            <Typography className={classes.heading}>
              what are cryptowolves nfts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.cardDetail}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat cupiditate aut, molestiae sapiente odio accusantium
              necessitatibus vel nostrum cum nesciunt exercitationem incidunt!
              Quibusdam corrupti cumque iste repellendus obcaecati vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
