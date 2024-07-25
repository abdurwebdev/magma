import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Speed() {
  const helloRef = useRef(null);

  useEffect(() => {
    const helloElement = helloRef.current;
    if (helloElement) {
      const textContent = helloElement.textContent;
      const words = textContent.split(' ');
      const spannedWords = words.map((word) => `<span>${word}</span>`).join(' ');

      helloElement.innerHTML = spannedWords;

      gsap.to(".hello span", {
        scrollTrigger: {
          trigger: ".hello",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
        stagger: 0.2,
        color: "#fff"
      });
    }
  }, []);

  return (
    <div
      data-scroll-section
      className="relative speedy p-5 py-40 w-full speedy h-screen bg-[#0A3CCE]"
    >
      <p className="text-white font-normal">
        CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT®)
      </p>
      <h1 ref={helloRef} className="mt-5 hello text-[50px] text-[#dadada69] font-light">
        The Digital Twin Token is a unique digital asset <br /> backed by
        property data. Magma combines your <br /> building’s components and
        systems essential <br /> information into a DTT®.
      </h1>
    </div>
  );
}

export default Speed;
