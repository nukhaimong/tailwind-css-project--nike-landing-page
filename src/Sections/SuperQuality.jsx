import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between max-lg:flex-col gap-16 w-full max-container"
    >
      <div className="flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We provide you <span className="text-coral-red">super</span>
          <span className="text-coral-red"> quality</span> shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and styles, our meticulously crafted footwear
          is design to elevate your experience, providing you with unmatch
          quality, innovation, and touch and elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and exellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="view details" />
        </div>
      </div>
      <div className="flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="product details"
          width={550}
          height={502}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
