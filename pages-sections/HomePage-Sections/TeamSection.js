import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Team</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/itl.png"
                  alt="ITL"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ITL
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  ITL is in charge of both frontend and backend work.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/jungle.png"
                  alt="JUngle"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jungle
                <br />
                <small className={classes.smallTitle}>
                  Product Manager / Designer
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Jungle thinks a lot about how this game should be played so
                  that it is fair for every player. Jungle also helps with
                  design elements.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
