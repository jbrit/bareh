import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

const loaderClearedEvent = new Event("loader-cleared");

const scrolling = () => {
  const loaderTl = gsap.timeline({
    onComplete: () => {
      document.dispatchEvent(loaderClearedEvent);
    },
  });
  loaderTl
    .to(".loader-content", { opacity: 0, delay: 0.5, duration: 1 })
    .to(".loader", { translateX: "-100%", duration: 1.5 });
  document.addEventListener("loader-cleared", () => {
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
    var tl = gsap.timeline({ ease: "expo.out" });
    tl.set(".smooth-scroll-wrapper", { opacity: 1, duration: 0 }).from(
      ".items-area",
      {
        "--coverHeight": "100%",
        translateY: "100%",
        duration: 2,
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
        duration: 1.5,
        opacity: 1,
        ease: "expo.out",
      })
      .from(".started-btn", { opacity: 0 }, "-=0.5");

    ScrollTrigger.create({
      trigger: ".split-text",
      animation: section2Timeline,
    });

    //   Section 3
    const section3Timeline = gsap.timeline({ duration: 2.5 });
    ScrollTrigger.create({
      trigger: ".customize-section",
      scroller: document.body,
      animation: section3Timeline,
    });
    section3Timeline
      .from(".img-s2", {
        ease: "expo.out",
        opacity: 0,
        duration: 2.5,
        y: "-100%",
      })
      .from(".img-s2-rt", { opacity: 0 });

    const customize = document.querySelector(".customize-section");
    customize.addEventListener("mousemove", (e) => {
      const { target, clientX, clientY } = e,
        xPos = clientX / target.offsetWidth - 0.5,
        yPos = clientY / target.offsetHeight - 0.5;
      if (target !== customize) return;
      gsap.to(".img-s2-rt", {
        x: xPos * 40,
        y: yPos * 60,
        rotateX: -(yPos * 20),
        rotateY: xPos * 30,
      });
    });
  });
};

export default scrolling;
