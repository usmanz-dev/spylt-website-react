import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FlavorTitle = () => {

  useGSAP(() => {

    const firstTextSplit = SplitText.create(".first-text-split", {
      type: "chars",
    });

    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".first-text-split",
        start: "top 70%",
        // markers: true,
      },
    });

    gsap.to(".flavor-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.8,
      ease: "circ.out",
      scrollTrigger: {
        trigger: ".flavor-text-scroll",
        start: "top 70%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".second-text-split",
        start: "top 80%",
        // markers: true,
      },
    });

  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">

      <div>
        <h1 className="overflow-hidden 2xl:py-0 py-3 first-text-split">
          We have 6
        </h1>
      </div>

      <div
        className="flavor-text-scroll"
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious Flavor</h1>
      </div>

    </div>
  );
};

export default FlavorTitle;
