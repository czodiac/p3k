import React from "react";
import { Helmet } from "react-helmet";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/whitepaperPage.js";

import SnackbarContent from "components/Snackbar/SnackbarContent.js";

// Sections for this page
import ProductSection from "pages-sections/HomePage-Sections/ProductSection.js";
import TeamSection from "pages-sections/HomePage-Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function WhitepaperPage(props) {
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
          <SnackbarContent
            message={
              <span>
                <b>DISCLAIMER</b> The information in this whitepaper is subject
                to change and should not be construed as a commitment, promise
                or guarantee by us relating to the future availability of
                services related to the use of the NFT or to their future
                performance or value.
              </span>
            }
            color="success"
            icon={Warning}
          />
          <div className={classes.title}>Whitepaper</div>
          <p>
            <a href="#_Toc94394915">Login</a>
          </p>
          <p>
            <a href="#_Toc94394916">Pages</a>
          </p>
          <p>
            <a href="#_Toc94394917">Hero NFT</a>
          </p>
          <p>
            <a href="#_Toc94394918">City</a>
          </p>
          <p>
            <a href="#_Toc94394919">Nation</a>
          </p>
          <p>
            <a href="#_Toc94394920">Soldier</a>
          </p>
          <p>
            <a href="#_Toc94394921">War Initiation Fee</a>
          </p>
          <p>
            <a href="#_Toc94394922">War</a>
          </p>
          <p>
            <a href="#_Toc94394923">War Types</a>
          </p>
          <br clear="all" />
          <a name="_Toc94394915"></a>
          <h1 className={classes.myH1}>Login</h1>
          <p>
            Metamask public address becomes the ID of a user.
          </p>
          <a name="_Toc94394916"></a>
          <h1 className={classes.myH1}>Pages</h1>
          <p>
            &#9632;&nbsp;Main page: A map such as this
            <a href="https://www.google.com/maps/d/u/0/viewer?mid=170NNOElVHIfZ6A7CdS9UmdwPtes&amp;ll=32.165390816192286%2C113.93783535937493&amp;z=6">
              https://www.google.com/maps/d/u/0/viewer?mid=170NNOElVHIfZ6A7CdS9UmdwPtes&amp;ll=32.165390816192286%2C113.93783535937493&amp;z=6
            </a>
            shows.
            <a href="https://leafletjs.com/index.html">
              https://leafletjs.com/index.html
            </a>
            JS library is to be used to show the map with cities. On the right
            side, nation rank will be shown. On the left side, cities ordered by
            their population will show. City details such as population, current
            owner, heroes and Polygon required to attach this city are shown
            when cursor is over a city.
          </p>
          <p>&#9632;&nbsp;My Profile:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My nation</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My cities</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My heroes (User can move
            soldiers between heroes. Remaining days until a hero can initiate a
            war.)
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My war (History of past
            and current war information)
          </p>
          <p>&#9632;&nbsp;Heroes: Every hero's attributes are shown.</p>
          <p>&#9632;&nbsp;Wars: Recent war history page.</p>
          <p>&#9632;&nbsp;War Request:</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- War type: 1 on 1, normal
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Heroes to participate
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Minimum soldier count.
            (When remaining soldiers falls below this number, you surrender)
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- A city to attack</p>
          <p>
            &#9632;&nbsp; Distribution: Current Polygon amount to distribute and
            daily Polygon distribution history page.
          </p>
          <p>&#9632;&nbsp;Whitepaper: This page.</p>
          <a name="_Toc94394917"></a>
          <h1 className={classes.myH1}>Hero NFT</h1>
          <p>&#9632;&nbsp;Attributes: Strength, Intelligence, Charm</p>
          <p>
            &#9632;&nbsp; Strength and intelligence attribute are for battles.
            Charm is to recruit soldiers daily.
          </p>
          <p>
            &#9632;&nbsp; Hero price varies by its attributes. The higher total
            attributes, the higher the cost. Platinum heroes get a premium.
          </p>
          <a name="_Toc94394918"></a>
          <h1 className={classes.myH1}>City</h1>
          <p>&#9632;&nbsp;Empty at first</p>
          <p>
            &#9632;&nbsp;If empty, any hero NFT owner can own it without a
            battle.
          </p>
          <p>
            &#9632;&nbsp;If owned, one has to request a war and win to own it.
          </p>
          <p>&#9632;&nbsp;A city has to have at least 1 hero (NFT).</p>
          <p>
            &#9632;&nbsp; Each city has different population. A city that has
            bigger population gets larger Polygon.
          </p>
          <p>&#9632;&nbsp;Benefits to own a city</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Your own image, link and
            description will be shown. * Site owner can manually revoke any
            inappropriate image.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Polygon will be
            distributed to city owners daily if it's over $1.00 USD in value.
          </p>
          <a name="_Toc94394919"></a>
          <h1 className={classes.myH1}>Nation</h1>
          <p>
            &#9632;&nbsp;A user who owns at least 1 hero NFT can create a
            nation.
          </p>
          <p>&#9632;&nbsp; Nation rank will be displayed on the main page.</p>
          <a name="_Toc94394920"></a>
          <h1 className={classes.myH1}>Soldier</h1>
          <p>
            &#9632;&nbsp; A hero NFT will get soldiers every day. Charm
            attribute is used to determine the number of soldiers.
          </p>
          <p>
            &#9632;&nbsp; When a user connects his/her wallet, the user gets
            bonus soldiers. There is a daily limit.
          </p>
          <p>
            &#9632;&nbsp; A hero has to have at least 1 soldier to initiate a
            war. After a battle, the number of soldiers reduce depending on
            participating heroes' strength and intelligence attribute.
          </p>
          <a name="_Toc94394921"></a>
          <h1 className={classes.myH1}>War Initiation Fee</h1>
          <p>
            &#9632;&nbsp;Small amount of Polygon is required to initiate a war.
          </p>
          <p>
            &#9632;&nbsp; Initiation fee can change depending on the daily
            distribution amount.
          </p>
          <p>
            &#9632;&nbsp; There has to be at least $1.00 USD in the distribution
            wallet(0xA55C6A3Bd1f3E497c396697138f73bd4B8F9202f) to distribute the
            Polygon to city owners.
          </p>
          <p>&#9632;&nbsp;Fee distribution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 40%: Winner</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 55%: Daily distribution
            wallet
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 5%: Site owner</p>
          <a name="_Toc94394922"></a>
          <h1 className={classes.myH1}>War</h1>
          <p>
            &#9632;&nbsp; Heroes' attributes, number of soldiers and their luck
            determine the winner.
          </p>
          <p>
            &#9632;&nbsp; One can request a war via war requeste page. The owner of the
            city gets an email when someone initiates a war.
          </p>
          <p>
            &#9632;&nbsp; On the war request page, one chooses the following and
            pay Polygon to initiate a war. This information is sent to the city
            owner via email. One can also check this information on the website.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- War type: 1 on 1, normal
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Heroes to participate
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Minimum soldier count.
            (When remaining soldiers falls below this number, you surrender)
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- A city to attack</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Polygon to pay: This
            amount is determined depending on city population
          </p>
          <p>
            &#9632;&nbsp;A hero can invade a city only once in every 3 days.
          </p>
          <p>
            &#9632;&nbsp; In 24 hours, one needs to decide whether to accept the
            war or surrender.
          </p>
          <p>&#9632;&nbsp;Result depending on response:</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Accepted: War begins
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Surrender: The
            challenger gets the city only. Soldier count does not change.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- No response in 24 hours:
            The challenger gets the city and 5% of the city's soldiers.
          </p>
          <a name="_Toc94394923"></a>
          <h1 className={classes.myH1}>War Types</h1>
          <h2 className={classes.myH2}>1 on 1</h2>
          <p>
            &#9632;&nbsp; A random value(1~0.8) is multiplied to both heroes'
            strength. A random value(0.4~0.2) is multiplied to both heroes'
            intelligence. The total value becomes the hero's final attribute.
            <br />
            <br />
            Ex) Zhang Fei (Strength 97, Intelligence 60) and Cao Pi (Strength
            90, Intelligence 80) fight a duel over a city.
            <br />
            <br />
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Zhang Fei's Strength
            random value is 0.9.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Zhang Fei's Intelligence
            random value is 0.4.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Zhang Fei's total
            attribute is (97X0.9)+(60X0.4)=111.3
            <br />
            <br />
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Cao Pi's Strength random
            value is 1.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Cao Pi's Intelligence
            random value is 0.3.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Cao Pi's total attribute
            is (90X1)+(80X0.3)=115
            <br />
            <br />
            Therefore, Cao Pi wins because his total attribute score 115 is
            greater than Zhang Fei's 111.3.
          </p>
          <p>
            &#9632;&nbsp; Winner takes the loser's soldiers. (10~20%) If loser
            has more soldiers, the winner gets 10~20% of his soldiers. From
            above example, if Zhang Fei has 10,000 soldiers and Cao Pi has 3,000
            soldiers, if Cao Pi wins, he gets 10~20% of 3,000 soldiers. If Zhang
            Fei wins, he gets 10~20% of 10,000 soldiers because he risked more
            soldiers.
            <br />
            <br />
            The % is randomly generates between 10~20 using the hero's charm
            attribute as follows:
            <br />
            <br /># of soliders X (charm /100) X (0.1~0.2)
          </p>
          <h2 className={classes.myH2}>Normal</h2>
          <p>&#9632;&nbsp; After each battle,</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- There is a 0.5~1% chance
            that a hero can die. The hero's soldiers all die.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Each party's soldiers
            diminish.
          </p>
          <p>
            &#9632;&nbsp; If more than 1 hero participates a war, the highest
            Strength attribute and the highest Intelligence attribute become the
            base value. The rest attributes multiplied by 2% are added to the
            base value.
          </p>
          <p>
            Ex) 3 heroes A, B and C participate a war,
            <br />
            <br />
          </p>
          <p>A's strength is 90 and intelligence is 80.</p>
          <p>B's strength is 60, intelligence is 100.</p>
          <p>C's strength is 70, intelligence is 50.</p>
          <p>
            A has the highest strength (90) and B's intelligence is the highest
            (100). So, the base value is 90 for strength and 100 for
            intelligence.
            <br />
            <br />
            Total strength value: A's 90 + 1.2(B's 60X0.02) + 1.4(C's 70X0.04) =
            92.6
          </p>
          <p>
            Total intelligence value: B's 100 + 1.6(A's 80X0.02) + 1(C's
            50X0.02) = 102.6
          </p>
          <p>
            &#9632;&nbsp; 0.9~0.7 is multiplied to the total strength value.
            1~0.8 is multiplied to the total intelligence value. The combination
            becomes the total. The party with higher total value wins the
            battle.
          </p>
          <p>
            &#9632;&nbsp; After each battle, the winning party's soldiers
            diminish by 5~10%. The losing party's solders diminish by 15~20%.
            However, if the losing party has more soldiers, 15~20% of the
            winning party's soldiers diminish from the losing party. For ex,
            losing party has 10,000 soldiers and the winning party has 8,000
            soldiers, the losing party only loses 15~20% of 8000. Therefore, a
            party with more soldiers has slight advantage.
          </p>
          <p>&#9632;&nbsp; Next battle then begins. A war ends if,</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- A party's soldier count
            falls below the minimum soldier count.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- A party has no hero
            left.
          </p>
          <p>
            &#9632;&nbsp;For normal war type, the winner gets 90~100% of the
            remaining soldiers from the loser unlike 10~20% for 1 on 1 war type.
            The % is determined by the highest charm attribute value from the
            winner's party multiplied by a random value:
            <br />
            Remaining soldiers X (Charm/100) X (0.9~1)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
