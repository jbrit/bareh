export const splitText = () => {
  // split-text
  document.querySelectorAll(".split-text").forEach(
    (holder) =>
      (holder.innerHTML = holder.innerHTML
        .split(" ")
        .filter((word) => word !== "")
        .map((word) => '<span class="split-word">' + word + "</span>")
        .join(""))
  );
};
