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
  function onShowOriginal() {
      window.open("/img/mainPage_Original.png", "_blank");
  }
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
          <h1 className={classes.myH1}>Contents</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394915">Login</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394916">Pages</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394917">Hero NFT</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394918">City</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394919">Nation</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394920">Soldier</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394921">War Initiation Fee</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394922">War</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#_Toc94394923">War Types</a>
          </p>
          <br clear="all" />
          <a name="_Toc94394915"></a>
          <h1 className={classes.myH1}>Login</h1>
          <p>Metamask public address becomes the ID of a user.</p>
          <a name="_Toc94394916"></a>
          <h1 className={classes.myH1}>Pages</h1>
          <p>
            &#9632;&nbsp;Main page: Mockup image is shown below. This page is
            going to be the main page when ready. On the left side, cities
            ordered by population show. City details such as population, current
            owner, heroes and Polygon required to attach this city are shown
            when cursor is over a city. On the right side, nations rank details
            such as link, # of heroes owned, # of cities owned and a custom
            image show.
            <div className={classes.center}>
              <img
                className={classes.withOriginal}
                title="Click to view in full size"
                onClick={onShowOriginal}
                src="img/mainPage.png"
                alt="Mockup"
              />
              <div className={classes.center}>Main page mockup</div>
            </div>
          </p>
          <p>
            &#9632;&nbsp;My Profile: This page will have the following sections.
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My nation</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My cities</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My heroes: User can move
            soldiers between heroes.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My war: History of past
            and current war information.
          </p>
          <p>&#9632;&nbsp;Heroes: Every hero's attributes are shown.</p>
          <p>&#9632;&nbsp;Wars: Recent war history page.</p>
          <p>
            &#9632;&nbsp;War Request: One can select the following and submit
            the request to initiate a war.
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
            &#9632;&nbsp; Distribution: Current Polygon amount to distribute and
            daily Polygon distribution history page.
          </p>
          <p>&#9632;&nbsp;Whitepaper: This page.</p>
          <a name="_Toc94394917"></a>
          <h1 className={classes.myH1}>Hero NFT</h1>
          <p>&#9632;&nbsp;Attributes: Strength, Intelligence and Charm</p>
          <p>
            &#9632;&nbsp; Strength and intelligence attribute are used for
            battles. Charm attribute is used to recruit soldiers daily.
          </p>
          <p>
            &#9632;&nbsp; Hero price varies by its attributes. The higher total
            attributes, the higher the cost. Platinum heroes get a premium.
          </p>
          <a name="_Toc94394918"></a>
          <h1 className={classes.myH1}>City</h1>
          <p>&#9632;&nbsp;Empty at first.</p>
          <p>
            &#9632;&nbsp;If empty, any hero NFT owner can own it just by
            clicking the claim link.
          </p>
          <p>
            &#9632;&nbsp;If occupied by another user, one can request a war and
            win to own it.
          </p>
          <p>
            &#9632;&nbsp;A user needs to allocate at least 1 hero NFT to own a
            city.
          </p>
          <p>
            &#9632;&nbsp; Each city has different population. A city that has
            bigger population gets more Polygon than the smaller one.
          </p>
          <p>&#9632;&nbsp;Benefits to own a city</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Your nation's image,
            link and name will be on the main page. * Site owner can manually
            revoke any inappropriate image.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Polygon will be
            distributed to city owners daily if there is over $1.00 USD in the
            distribution wallet.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- If one successfully
            defends an attack, the owner receives 40% of the Polygon the
            attacker paid to initiate the war.
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
            attribute is used to determine the number of soldiers each hero
            recruites.
          </p>
          <p>
            &#9632;&nbsp; When a user connects his/her wallet, the user gets
            bonus soldiers. There is a daily limit.
          </p>
          <p>
            &#9632;&nbsp; A hero has to have at least 1 soldier to initiate a
            war. There can be multiple battles for a war. After each battle, the
            number of soldiers get reduced for both parties depending on
            participating heroes' strength and intelligence attribute.
          </p>
          <a name="_Toc94394921"></a>
          <h1 className={classes.myH1}>War Initiation Fee</h1>
          <p>
            &#9632;&nbsp;Small amount of Polygon is required to initiate a war.
          </p>
          <p>
            &#9632;&nbsp; Initiation fee can change depending on various factors
            such as demand and war frequency.
          </p>
          <p>
            &#9632;&nbsp; There has to be at least $1.00 USD in the distribution
            wallet(0xA55C6A3Bd1f3E497c396697138f73bd4B8F9202f) to distribute
            Polygon to city owners.
          </p>
          <p>&#9632;&nbsp;Fee distribution:</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 40%: City owner if s/he
            defends an invasion
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 55%: Daily distribution
            wallet
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 5%: Site owner</p>
          <a name="_Toc94394922"></a>
          <h1 className={classes.myH1}>War</h1>
          <p>
            &#9632;&nbsp;There can be multiple battles for a war. All process is
            automated. The result is sent to both parties via email after a war
            is over. The result can also be viewed on the war page on this site.
          </p>
          <p>
            &#9632;&nbsp; Heroes' attributes, number of soldiers and their luck
            determine the winner.
          </p>
          <p>
            &#9632;&nbsp; One can initiate a war via war request page. The owner
            of the city gets an email when someone initiates a war. One can also
            check this information on this website.
          </p>
          <p>
            &#9632;&nbsp;A hero can participate a new war 3 days after the
            current war is over.
          </p>
          <p>
            &#9632;&nbsp; After a war request email is sent to a city owner, the
            owner needs to decide whether to accept the war or surrender within
            24 hours.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Accepted: War begins
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Surrender: The
            challenger gets the city only. Soldier number does not change.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- No response in 24 hours:
            The challenger gets the city and 5% of the city's soldiers.
          </p>
          <p>
            &#9632;&nbsp;After a war is initiated for a city, other users can
            not initiate a war for the city until it is over.
          </p>
          <a name="_Toc94394923"></a>
          <h1 className={classes.myH1}>War Types</h1>
          <h2 className={classes.myH2}>1 on 1 War</h2>
          <p>
            &#9632;&nbsp; A random value(1~0.8) is multiplied to the hero's
            strength. A random value(0.4~0.2) is multiplied to the hero's
            intelligence. Both values become the hero's total attirbute. 5
            points are added to the total if it is a platinum hero.
            <br />
            <br />
            Ex) Zhang Fei (Strength 97, Intelligence 60) and Cao Pi (Strength
            90, Intelligence 80) fight a duel.
            <br />
            <br />
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Zhang Fei's random value
            for his Strength is 0.9.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Zhang Fei's random value
            for his Intelligence is 0.4.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Zhang Fei's total
            attribute is (97X0.9)+(60X0.4)+5(because he is a platinum)=116.3
            <br />
            <br />
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Cao Pi's random value
            for his Strength is 1.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Cao Pi's random value
            for his Intelligence is 0.3.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Cao Pi's total attribute
            is (90X1)+(80X0.3)=115
            <br />
            <br />
            Therefore, Zhang Fei's party wins the war because his total
            attribute value 116.3 is greater than Cao Pi's 115.
          </p>
          <p>
            &#9632;&nbsp; Winner takes 10~20% of the loser's soldiers. If the
            party that lost a war has more soldiers, the winner's party gets 10~20% of the
            soldier count. Let's say Zhang Fei's party has 10,000 soldiers and
            Cao Pi's party has 3,000 soldiers. If Cao Pi wins, he gets 10~20% of
            3,000 soldiers. If Zhang Fei wins, he gets 10~20% of 10,000 soldiers
            because he risked more soldiers.
            <br />
            <br />
            The % is randomly generated between 10~20 using the hero's charm
            attribute: # of soliders X (charm /100) X (0.1~0.2)
          </p>
          <h2 className={classes.myH2}>Normal War</h2>
          <p>
            &#9632;&nbsp; There can be multiple batttles. After each battle,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- There is a 0.5~1% chance
            that a hero can die during a battle. If the hero dies, its soldiers
            are evenly distributed to the other heroes in the same party.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Each party's soldiers
            decrease after each battle.
          </p>
          <p>
            &#9632;&nbsp; If more than 1 hero participates a war, the highest
            Strength attribute and the highest Intelligence attribute become the
            base value. The rest attributes multiplied by 2% are added to the
            base value.
          </p>
          <p>
            Ex) Let's say 3 heroes A, B and C participate a war.
            <br />
            <br />
          </p>
          <p>A's strength is 90 and intelligence is 80.</p>
          <p>B's strength is 60 and intelligence is 100.</p>
          <p>C's strength is 70 and intelligence is 50.</p>
          <p>
            A has the highest strength (90) and B's intelligence is the highest
            (100). So, the base value is 90 for strength and 100 for
            intelligence for the party.
            <br />
            <br />
            Total strength value for othe party is then calculated as such: A's
            90 + 1.2(B's 60X0.02) + 1.4(C's 70X0.04) = 92.6
          </p>
          <p>
            Similarly, total intelligence value is calcualted as such: B's 100 +
            1.6(A's 80X0.02) + 1(C's 50X0.02) = 102.6
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
            winning party's soldiers diminish from the losing party. For
            example, let's say the losing party has 10,000 soldiers and the
            winning party has 8,000 soldiers. The losing party only loses 15~20%
            of 8000. This is to give a slight advantage to the party with more
            soldiers.
          </p>
          <p>
            &#9632;&nbsp; If none of the below conditions is met after a battle,
            next battle begins. A war ends if,
          </p>
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
