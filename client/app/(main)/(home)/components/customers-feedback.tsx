"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const CustomersFeedback = () => {
  return (
    <div className="container mx-auto py-[50px]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="max-w-full"
      >
        <div className="flex items-center justify-between mb-[40px]">
          <h2 className="big-title">Lời Chứng Thực Của Khách Hàng</h2>
          <div className="flex items-center gap-3">
            <CarouselPrevious className="static translate-none" />
            <CarouselNext className="static translate-none" />
          </div>
        </div>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 cursor-grab active:cursor-grabbing select-none"
            >
              <div className="py-[20px] px-[70px] bg-secondary">
                <p className="text-2xl font-semibold text-neural-800 mb-[14px]">
                  {'"Giao Tiếp Và Quản Lý Dự Án Tuyệt Vời"'}
                </p>
                <Separator className="bg-neutral-500 mb-[50px]" />
                <p className="text-neutral-500 mb-[60px]">
                  Việc giao tiếp trong suốt dự án diễn ra suôn sẻ. Đông Ba luôn
                  cập nhật thông tin cho chúng tôi ở mọi giai đoạn, đảm bảo
                  không có bất kỳ sự cố nào xảy ra. Kỹ năng quản lý dự án của họ
                  cũng mạnh mẽ như năng lực kỹ thuật của họ vậy.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative rounded-full overflow-hidden size-[67px] shrink-0">
                      <Image
                        src="/VuTuanLong.jpg"
                        alt="customer"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="">
                      <p className="text-[18px] font-semibold text-neutral-800">
                        Mr. David L.
                      </p>
                      <p className="text-neutral-500">
                        Ky Sư Cao Cấp, Vĩnh Thành
                      </p>
                    </div>
                  </div>
                  LOGO
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CustomersFeedback;
