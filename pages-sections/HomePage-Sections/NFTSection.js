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

import styles from "styles/jss/nextjs-material-kit/pages/homePageSections/nftStyle.js";

const useStyles = makeStyles(styles);

export default function NFTSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>3 Kingdoms Hero NFT</h2>
          <h5 className={classes.description}>
            There are <b>921</b> unique hero NFTs. Each NFT belongs to 1 of 4
            types: Platinum, Gold, Silver or Bronze.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.gridPadding}>
        <GridItem xs={6} sm={4} md={4}>
          <img alt="..." height={30} src="img/nft/war.png" />
          <h4 className={classes.subTitle}>Strength</h4>
          <span className={classes.gridItemTxt}>
            Both strength and intelligence attribute are used to determine how
            many soldiers die in a battle. Your soldiers are less likely die in
            a battle if this value is high. This value is important for all
            types of battle(1 on 1 and normal). However, it is a bit more useful
            for 1 on 1 battles. <a href="#">This</a> describes it in details.
          </span>
        </GridItem>
        <GridItem xs={6} sm={4} md={4}>
          <img alt="..." height={30} src="img/nft/brain.png" />
          <h4 className={classes.subTitle}>Intelligence</h4>
          <span className={classes.gridItemTxt}>
            Same as strength attribute. The only difference is that this value
            is a bit more useful for normal battles than 1 on 1 battles.{" "}
            <a href="#">This</a> describes it in details.
          </span>
        </GridItem>
        <GridItem xs={6} sm={4} md={4}>
          <img alt="..." height={30} src="img/nft/charm.png" />
          <h4 className={classes.subTitle}>Attraction</h4>
          <span className={classes.gridItemTxt}>
            Every day your hero recruites soldiers. Higher attraction value
            helps you to grow your soldiers faster. You have better chancing of
            winning a battle if you have more soldiers.
            <a href="#">This</a> describes it in details.
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
            Platinum is the only type was chosen manually by creator and
            platinum card does not necessarily mean the hero's stats are high.
            However, these heroes will increase the change of winning battles.
            You can find who they are <a href="#">here</a>.
          </span>
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <img alt="..." width={200} src="img/nft/138.png" />
          <h4 className={classes.subTitle}>Gold</h4>
          <div className={classes.supply}>
            Total supply: <b>229 / 921</b>
          </div>
          <span className={classes.gridItemTxt}>
            Battle, is the only type was chosen manually by creator and platinum
            card does not necessarily mean the hero's stats are high. However,
            these heroes will increase the change of winning battles. You can
            find who they are <a href="#">here</a>.
          </span>
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <img alt="..." width={200} src="img/nft/49.png" />
          <h4 className={classes.subTitle}>Silver</h4>
          <div className={classes.supply}>
            Total supply: <b>514 / 921</b>
          </div>
          <span className={classes.gridItemTxt}>
            Platinum is the only type was chosen manually by creator and
            platinum card does not necessarily mean the hero's stats are high.
            However, these heroes will increase the change of winning battles.
            You can find who they are <a href="#">here</a>.
          </span>
        </GridItem>
        <GridItem xs={6} sm={3} md={3}>
          <img alt="..." width={200} src="img/nft/129.png" />
          <h4 className={classes.subTitle}>Bronze</h4>
          <div className={classes.supply}>
            Total supply: <b>141 / 921</b>
          </div>
          <span className={classes.gridItemTxt}>
            Platinum is the only type was chosen manually by creator and
            platinum card does not necessarily mean the hero's stats are high.
            However, these heroes will increase the change of winning battles.
            You can find who they are <a href="#">here</a>.
          </span>
        </GridItem>
      </GridContainer>
    </div>
  );
}
