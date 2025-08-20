import BackGroundImage from "@/components/common/backgroun-image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Hero = () => {
  return (
    <BackGroundImage
      url="/hero.png"
      alt="hero"
      aspectRatio="1.9"
      overlayClassName="flex items-center flex-col gap-4 justify-center"
    >
      <div className="container mx-auto text-white">
        <h1 className="text-7xl leading-24 font-[500] uppercase w-full">
          <p className="text-left">Giải pháp cơ khí</p>
          <p className="text-center">Dẫn lối thành công</p>
        </h1>

        <Separator className="bg-white my-6" />

        <div className="flex gap-2 py-1 justify-between items-start mb-15">
          <span className="text-small font-medium uppercase">
            / Trở thành doanh nghiệp hàng đầu /
          </span>
          <div className="flex flex-col items-start gap-4 w-[320px] text-left">
            <span className="text-[18px]">
              Tiên phong trong tương lai của kỹ thuật và sản xuất công nghiệp
              với công nghệ tiên tiến và quy trình do chuyên gia điều hành.
            </span>
            <span className="text-[18px]">
              Phương pháp tiếp cận toàn diện của chúng tôi cung cấp các giải
              pháp chính xác, có khả năng mở rộng giúp doanh nghiệp đạt được mục
              tiêu sản xuất.
            </span>
            <Button variant="outline-secondary">SẢN PHẨM CHÚNG TÔI</Button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-widest">Mã Sản Phẩm</p>
            <p className="text-8xl font-light">200+</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-widest">
              Diện Tích Nhà Xưởng
            </p>
            <p className="text-8xl font-light">
              3000m<sup>2</sup>
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-widest">
              Máy Móc Chuyên Dụng
            </p>
            <p className="text-8xl font-light">250+</p>
          </div>
        </div>
      </div>
    </BackGroundImage>
  );
};

export default Hero;
