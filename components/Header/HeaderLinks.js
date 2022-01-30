/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import { useWeb3React } from "@web3-react/core";
import { injected } from "components/Wallet/connectors.js";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const {active, account, library, connector, activate, deactivate} = useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/heroes" color="transparent" className={classes.navLink}>
          Heroes
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/whitepaper"
          color="transparent"
          className={classes.navLink}
        >
          Whitepaper
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/3Kingdoms5"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagdiscord"
          title="Follow us on discord"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://discord.gg/NWJKY3cb"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-discord"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        {active ? (
          <Tooltip
            id="disconnect"
            title="Click to disconnect"
            placement={"top"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button color="default" size="md" onClick={disconnect}>
              {account.substring(0, 5) + "..." + account.slice(-5)}
            </Button>
          </Tooltip>
        ) : (
          <Button color="primary" size="md" onClick={connect}>
            Connect Metamask
          </Button>
        )}
      </ListItem>
    </List>
  );
}

/* 
 <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="My Empire"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link href="/#">
              <a className={classes.dropdownLink}>Request Battle</a>
            </Link>,
            <Link href="/#">
              <a className={classes.dropdownLink}>Empire</a>
            </Link>,
            <Link href="/#">
              <a className={classes.dropdownLink}>Cities</a>
            </Link>,
            <Link href="/#">
              <a className={classes.dropdownLink}>My Heroes</a>
            </Link>,
            <Link href="/#">
              <a className={classes.dropdownLink}>Battle History</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/heroes" color="transparent" className={classes.navLink}>
          Heroes
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/battles" color="transparent" className={classes.navLink}>
          Battles
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/whitepaper"
          color="transparent"
          className={classes.navLink}
        >
          Whitepaper
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/components"
          color="transparent"
          className={classes.navLink}
        >
          Components
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/3Kingdoms5"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagdiscord"
          title="Follow us on discord"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://discord.gg/NWJKY3cb"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-discord"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        {active ? (
          <Tooltip
            id="disconnect"
            title="Click to disconnect"
            placement={"top"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button color="default" size="md" onClick={disconnect}>
              {account.substring(0, 5) + "..." + account.slice(-5)}
            </Button>
          </Tooltip>
        ) : (
          <Button color="primary" size="md" onClick={connect}>
            Connect Metamask
          </Button>
        )}
      </ListItem>
    </List>
    */