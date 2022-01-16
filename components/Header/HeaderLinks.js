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
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Placeholder</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Placeholder
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>unarchive</Icon> Placeholder
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Placeholder
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
