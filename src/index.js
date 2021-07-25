import scrolling from "./scrolling";
import { splitText } from "./splitText";

const initPage = () => {
  splitText();
  scrolling();
};

document.onreadystatechange = (e) => {
  if (document.readyState === "complete") {
    initPage();
    console.log("Ready", e);
  }
};
