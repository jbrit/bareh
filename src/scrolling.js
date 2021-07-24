import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

const scrolling = () => {
  gsap.registerPlugin(ScrollTrigger);

  let scrollbar = Scrollbar.init(
    document.querySelector(".smooth-scroll-wrapper")
  );

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        scrollbar.scrollTop = value;
      }
      return scrollbar.scrollTop;
    },
  });

  // Reveal Background Image
  var tl = gsap.timeline({ ease: "slow (0.7 0.7, false)" });
  tl.set(".smooth-scroll-wrapper", { opacity: 1, duration: 0 }).from(
    ".items-area",
    {
      "--coverHeight": "100%",
      translateY: "100%",
      duration: 1,
      delay: "0.5s",
    }
  );
  gsap.to(".split-word", {
    scrollTrigger: {
      trigger: ".split-word",
      scroller: document.body,
      start: "center bottom",
    },
    "--wordCoverHeight": "0%",
    stagger: 0.1,
    duration: 0.7,
    delay: 0.5,
    ease: "expo.out",
  });

  gsap.from("img", {
    scrollTrigger: {
      trigger: "img",
      scroller: document.body,
      start: "center bottom",
    },
    delay: 0.5,
    opacity: 0,
  });
};

export default scrolling;
