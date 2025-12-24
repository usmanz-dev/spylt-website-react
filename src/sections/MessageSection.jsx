import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const MessageSection = () => {

  useGSAP(() => {

    /* ======================
       SPLIT TEXT
    ====================== */
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });

    const paragraphSplit = SplitText.create(".message-paragraph", {
      type: "words",
    });

    /* ======================
       FIRST MESSAGE COLOR FILL
    ====================== */
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".first-message",
        start: "top 75%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    /* ======================
       SECOND MESSAGE COLOR FILL
    ====================== */
    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      stagger: 0.25,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".second-message",
        start: "top 75%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    /* ======================
       SUBTITLE CLIP REVEAL
    ====================== */
    gsap.to(".msg-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.8,
      ease: "circ.out",
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 70%",
      },
    });

    /* ======================
       PARAGRAPH WORD REVEAL
    ====================== */
    gsap.from(paragraphSplit.words, {
      yPercent: 120,
      opacity: 0,
      stagger: 0.03,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".message-paragraph",
        start: "top 80%",
      },
    });

  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">

          <div className="msg-wrapper text-center">

            <h1 className="first-message">
              Stir up your <br />
              fearless past
            </h1>

            <div
              className="msg-text-scroll inline-block my-6 -mt-28"
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
              }}
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown uppercase font-bold">
                  Fuel Up
                </h2>
              </div>
            </div>

            <h1 className="second-message">
              Your future with <br />
              every gulp of perfect <br />
              protein
            </h1>
          </div>

          <div className="max-w-md mx-auto mt-16 px-8 flex justify-center">
            <div className="overflow-hidden">
              <p className="message-paragraph text-center font-paragraph">
                Rev up your rebel spirit and feed the adventure of life <br />
                with SPYLT, where you’re one chug away from epic <br />
                nostalgia and fearless fun.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MessageSection;
