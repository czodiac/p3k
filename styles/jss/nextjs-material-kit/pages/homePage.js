import { container, title } from "styles/jss/nextjs-material-kit.js";

const homePageStyle = {
  container: {
    zIndex: "12",
    color: "#000",
    ...container,
  },
  chkIcon: {
    margin: "0 10px 0 0",
    color: "#448946",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#343434",
    textDecoration: "none",
    fontSize: "4em",
    lineHeight: 1.1,
  },
  smTitle: {
    fontSize: "0.75em",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
};

export default homePageStyle;
