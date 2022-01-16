import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

// @material-ui/icons
import Check from "@material-ui/icons/Check";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/homePage.js";

// Sections for this page
import ProductSection from "pages-sections/HomePage-Sections/ProductSection.js";
import TeamSection from "pages-sections/HomePage-Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="三國志"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/bg.gif">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <span className={classes.title}>
                3 Kingdoms NFT game on Polygon{" "}
                <img alt="Polygon/Matic" src="/polygon-matic-logo.png" />
              </span>
              <h4>Use hero NFTs and conquer cities to:</h4>
              <List disablePadding>
                <ListItem>
                  <Check className={classes.chkIcon} />
                  Earn Polygon coin daily
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Check className={classes.chkIcon} />
                  Advertise your own image and link on this site
                </ListItem>
              </List>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://opensea.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Hero NFT
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
