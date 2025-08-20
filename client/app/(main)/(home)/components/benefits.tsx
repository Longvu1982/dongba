import { Separator } from "@/components/ui/separator";
import { Check, FastForward } from "lucide-react";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="pt-[100px] pb-[50px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 items-center gap-10 mb-[50px]">
          <div className="space-y-8 w-4/5">
            <h2 className="big-title leading-14">
              Khám Phá Những <br /> Lợi Ích Khi Hợp Tác <br /> Với Chúng Tôi
            </h2>
            <p className="text-neutral-500">
              Tại Đông Ba, chúng tôi đặt chất lượng lên hàng đầu, đảm bảo mọi
              sản phẩm đều đáp ứng các tiêu chuẩn khắt khe. Cam kết giao hàng
              đúng hẹn và giá cả cạnh tranh là những yếu tố tạo nên sự khác biệt
              của chúng tôi trong ngành.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0C2389] flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-neutral-900 text-[20px] font-semibold">
                  Bảo Đám Chất Lượng
                </p>
                <p className="text-neutral-500 font-normal">
                  Chúng tôi đảm bảo sản phẩm chất lượng cao vượt quá mong đợi
                  của bạn và tiêu chuẩn ngành.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0C2389] flex items-center justify-center">
                  <FastForward className="w-6 h-6 text-white" />
                </div>
                <p className="text-neutral-900 text-[20px] font-semibold">
                  Giao Hàng Tốc Độ
                </p>
                <p className="text-neutral-500 font-normal">
                  Hãy tin tưởng vào sự giao hàng đúng hạn của chúng tôi, đảm bảo
                  dự án của bạn luôn đúng tiến độ.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[600px] relative overflow-hidden rounded-md">
            <Image
              fill
              className="object-cover"
              src="/benefit-1.jpg"
              alt="benefit-1"
            />
          </div>
        </div>
        <Separator className="bg-neutral-600" />
      </div>
    </div>
  );
};

export default Benefits;
