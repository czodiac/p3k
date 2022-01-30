import React from "react";
import { Helmet } from "react-helmet";
// nodejs library that concatenates classes
import classNames from "classnames";
import { useWeb3React } from "@web3-react/core";

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

import styles from "styles/jss/nextjs-material-kit/pages/battlesPage.js";

// Sections for this page
import ProductSection from "pages-sections/HomePage-Sections/ProductSection.js";
import TeamSection from "pages-sections/HomePage-Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function BattlesPage(props) {
  const {active, account, library, connector, activate, deactivate} = useWeb3React();
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
      <Parallax
        filter
        responsive
        className={classes.defaultParallax}
      ></Parallax>
      <Helmet>
        <script src="js/sortTable.js" type="text/javascript" />
      </Helmet>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.title}>Battles History</div>
          {active ? <div className={classes.subtitle}>These are your hero NFTs in your wallet, {account}.</div> 
            : 
            <div className={classes.subtitle}>Work in progress...</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
