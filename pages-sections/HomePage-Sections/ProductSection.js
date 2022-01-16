import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import MoneyOff from "@material-ui/icons/MoneyOff";
import Search from "@material-ui/icons/Search";
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
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>3 Kingdoms Hero NFT</h2>
          <h5 className={classes.description}>
            You can conquer a city with a hero NFT. Every NFTs will be
            pre-minted and can only be purchased at Opensea.io with virtually 0
            gas fee. It is fair for everyone.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={6} sm={3} md={3}>
          <InfoArea
            title="Play and Earn"
            description="Just by owning a city, you recieve polygon daily. If you successfully defend your city from an attack, you also receive Polygon."
            icon={MonetizationOn}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <InfoArea
            title="Pre-Minted"
            description="Minting is good for publishers not buyers. You no longer need to: wait for minting or whitelist start time, get a random NFT and pay expensive gas fee. We offer a level playing field for everyone."
            icon={VerifiedUser}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <InfoArea
            title="Virtually 0 Gas Fee"
            description="Efficient Polygon network requires near 0 gas fee yet compatible with Etherium. There is no need to pay expensive gas fee to mint or to buy our NFT."
            icon={MoneyOff}
            iconColor="danger"
            vertical
          />
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <InfoArea
            title="Transparent"
            description="We are transparent. Users pay small Polygon to initiate a battle. The wallet used to accumulate this fee will be public. Every battle history will also be available on Battles page."
            icon={Search}
            iconColor="success"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
