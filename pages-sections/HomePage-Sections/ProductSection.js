import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import MoneyOff from "@material-ui/icons/MoneyOff";
import MonetizationOn from "@material-ui/icons/MonetizationOn";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>3 Kingdoms Hero NFT</h2>
          <h5 className={classes.description}>
            You can conquer a city with a hero NFT. Every NFTs will be
            pre-minted and can only be purchased at Opensea.io with virtually 0
            gas fee. It is fair for everyone.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Virtually 0 Gas Fee"
              description="Welcome to ultra fast and efficient Etherium compatible Polygon network. There is no need to pay expensive gas fee to mint or to buy a NFT."
              icon={MoneyOff}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Earn Passive Income"
              description="Own a city to recieve polygon coins daily. Our payout address is on discord for transparency. Every battle history will also be available to view on this site."
              icon={MonetizationOn}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Pre-Minted"
              description="Minting is good for publishers not buyers. You no longer need to: wait for minting or whitelist start time, get a random NFT and pay expensive gas fee. Every buyers are on equal playing ground."
              icon={VerifiedUser}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
