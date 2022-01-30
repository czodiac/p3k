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
import Link from "next/link";

import styles from "styles/jss/nextjs-material-kit/pages/homePageSections/nftStyle.js";

const useStyles = makeStyles(styles);

export default function NFTSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Hero NFT</h2>
          <h5 className={classes.description}>
            There are <b>921</b> unique hero NFTs. A hero has 3 attributes:
            Strength, Intelligence and Charm. Attributes range from 0(weakest)
            to 100(strongest). Depending on hero popularity and attribute
            values, a hero NFT belongs to 1 of 4 types: Platinum, Gold, Silver
            or Bronze.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.gridPadding}>
        <GridItem xs={6} sm={4} md={4}>
          <img alt="..." height={30} src="img/nft/war.png" />
          <h4 className={classes.subTitle}>Strength</h4>
          <span className={classes.gridItemTxt}>
            This is one of the factors that determines how many soldiers die in
            a battle. This is important for all types of battle: 1 on 1 and
            normal. However, it is more useful for 1 on 1 battles. (
            <Link href="/whitepaper">more</Link>)
          </span>
        </GridItem>
        <GridItem xs={6} sm={4} md={4}>
          <img alt="..." height={30} src="img/nft/brain.png" />
          <h4 className={classes.subTitle}>Intelligence</h4>
          <span className={classes.gridItemTxt}>
            Its usage is the same as strength. The only difference is this is
            more useful for normal battles than 1 on 1. (
            <Link href="/whitepaper">more</Link>)
          </span>
        </GridItem>
        <GridItem xs={6} sm={4} md={4}>
          <img alt="..." height={30} src="img/nft/charm.png" />
          <h4 className={classes.subTitle}>Charm</h4>
          <span className={classes.gridItemTxt}>
            Every day your hero recruites soldiers. Higher charm value helps you
            to grow your soldiers faster. There is a higher chance of winning a
            battle if you have more soldiers. (
            <Link href="/whitepaper">more</Link>)
          </span>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={6} sm={3} md={3}>
          <img alt="..." width={200} src="img/nft/660.png" />
          <h4 className={classes.subTitle}>Platinum</h4>
          <div className={classes.supply}>
            Total supply: <b>37 / 921</b>
          </div>
          <span className={classes.gridItemTxt}>
            Well-known 3 Kingdoms heroes. These heroes do not necessarily
            possess high attributes. However, these heroes increase the chance
            of winning battles.
          </span>
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <img alt="..." width={200} src="img/nft/138.png" />
          <h4 className={classes.subTitle}>Gold</h4>
          <div className={classes.supply}>
            Total supply: <b>229 / 921</b>
          </div>
          <span className={classes.gridItemTxt}>
            If a hero posesses any attribute higher than 77, the hero's type is
            gold.
          </span>
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <img alt="..." width={200} src="img/nft/49.png" />
          <h4 className={classes.subTitle}>Silver</h4>
          <div className={classes.supply}>
            Total supply: <b>514 / 921</b>
          </div>
          <span className={classes.gridItemTxt}>
            If a hero posesses any attribute higher than 59, the hero's type is
            silver.
          </span>
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <img alt="..." width={200} src="img/nft/129.png" />
          <h4 className={classes.subTitle}>Bronze</h4>
          <div className={classes.supply}>
            Total supply: <b>141 / 921</b>
          </div>
          <span className={classes.gridItemTxt}>
            All other heroes' type is bronze.
          </span>
        </GridItem>
      </GridContainer>
    </div>
  );
}
