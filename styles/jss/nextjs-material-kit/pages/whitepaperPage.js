import { container, title } from "styles/jss/nextjs-material-kit.js";

const whitepaperPageStyle = {
  container: {
    zIndex: "12",
    color: "#000",
    padding: "30px",
    ...container,
  },
  defaultParallax: {
    height: "150px",
  },
  title: {
    ...title,
    color: "#824e0a",
    margin: "10px 0 10px",
    display: "inline-block",
    fontSize: "35px",
    textAlign: "center",
    width: "100%",
  },
  subtitle: {
    margin: "10px",
    fontSize: "14px",
    textAlign: "center",
  },
  center: {
    textAlign: "center",
    margin: "auto auto",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    minHeight: "1500px",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  center: {
    textAlign: "center",
  },
  withOriginal: {
    cursor: "pointer",
  },
  td: {
    padding: "230px",
  },
  myH1: {
    ...title,
    margin: "100px 0 10px 0",
    fontSize: "25px",
  },
  myH2: {
    ...title,
    color: "#7e7e7e",
    fontSize: "25px",
    margin: "25px 0 10px 5px",
  },
};

export default whitepaperPageStyle;
