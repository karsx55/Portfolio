import React from "react";
import Image from "next/image";

const HeroButton = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div>
        <Image src="/me.png" alt="me" height={1000} width={1000} />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="arrow.svg" alt="arrow" height={50} width={50} />
        <p className="text-2xl">
          Freelance
          <br />
          Developer
        </p>
      </div>
    </div>
  );
};

export default HeroButton;
