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

  // Section 1: Reveal Background Image
  var tl = gsap.timeline({ ease: "expo.out", duration: 2 });
  tl.set(".smooth-scroll-wrapper", { opacity: 1, duration: 0 }).from(
    ".items-area",
    {
      "--coverHeight": "100%",
      translateY: "100%",
      duration: 1,
      delay: "0.5s",
    }
  );

  //   Section 2
  gsap.set(".split-word", { opacity: 0 });
  const section2Timeline = gsap.timeline({
    ease: "slow (0.7 0.7, false)",
    duration: 1.5,
  });
  section2Timeline
    .to(".split-word", {
      "--wordCoverHeight": "0%",
      stagger: 0.1,
      duration: 0.7,
      opacity: 1,
      ease: "expo.out",
    })
    .from("button", { opacity: 0 }, "-=0.3");

  ScrollTrigger.create({
    trigger: ".split-text",
    animation: section2Timeline,
    start: "top bottom",
  });

  //   Section 3
  gsap.from("img-s2", {
    scrollTrigger: {
      trigger: ".customize-section",
      scroller: document.body,
      start: "center bottom",
    },
    delay: 0.5,
    ease: "expo.out",
    opacity: 0,
    duration: 1.5,
    translateY: "-100%",
    height: "0%",
    width: "50%",
  });
};

export default scrolling;
