/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

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
  const classes = useStyles();
  return (
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
            <Link href="/RequestBattle">
              <a className={classes.dropdownLink}>Request Battle</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Empire</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Cities</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>My Heroes</a>
            </Link>,
            <Link href="/components">
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
        <Button
          href="/components"
          color="transparent"
          className={classes.navLink}
        >
          Battles
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/components"
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
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
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
    </List>
  );
}
