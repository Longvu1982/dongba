import BackGroundImage from "@/components/common/backgroun-image";
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <BackGroundImage
      url="/hero.png"
      alt="hero"
      aspectRatio="1.9"
      overlayClassName="flex items-center flex-col gap-4 text-center justify-center"
    >
      <p className="uppercase text-[#38BDF8] font-[600]">
        Become a leading company in
      </p>
      <p className="text-7xl font-bold font-oswald uppercase text-white">
        Innovative <br /> Solutions for <br /> Precision <br /> Manufacturing
      </p>
      <p className="font-lato w-[590px] text-white text-[18px]">
        At Dong Ba Co., Ltd., we specialize in crafting high-quality progressive
        molds and fixtures tailored to meet the needs of various industries. Our
        commitment to excellence ensures timely delivery and competitive
        pricing, making us your trusted partner in manufacturing.
      </p>
      <div className="flex items-center gap-2 mt-6">
        <Button variant="outline-secondary">Contact Us</Button>
      </div>
    </BackGroundImage>
  );
};

export default Hero;
