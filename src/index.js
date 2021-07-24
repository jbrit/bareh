import scrolling from "./scrolling";

const showPage = () => {
  // split-text
  document.querySelectorAll(".split-text").forEach(
    (holder) =>
      (holder.innerHTML = holder.innerHTML
        .split(" ")
        .filter((word) => word !== "")
        .map((word) => '<span class="split-word">' + word + "</span>")
        .join(""))
  );
  scrolling();
};

document.onreadystatechange = (e) => {
  if (document.readyState == "complete") {
    showPage();
  }
  console.log("Ready", e);
};
