import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, FastForward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const steps = [
  {
    id: 1,
    title: "Gửi Yêu Cầu Cho Chúng Tôi",
    description:
      "Gửi yêu cầu của bạn cho chúng tôi và nhận được sự hỗ trợ chuyên môn, các khuyến nghị phù hợp và thông tin chi tiết.",
  },
  {
    id: 2,
    title: "Nhận Thời Gian Giao Hàng Và Báo Giá",
    description:
      "Nhận báo giá chi tiết cùng thời gian giao hàng dự kiến cho đơn hàng của bạn.",
  },
  {
    id: 3,
    title: "Xác Nhận Thanh Toán",
    description:
      "Để xác nhận đơn hàng của bạn và bắt đầu sản xuất, hai bên sẽ thảo luận về phương thức thanh toán và sau khi hoàn thành, lịch trình dự án của bạn sẽ được đảm bảo và cho phép chúng tôi bắt đầu mua sắm vật liệu và công tác chuẩn bị.",
  },
];

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

        <div className="grid grid-cols-2 gap-[240px] py-[50px] items-center">
          <div className="space-y-10">
            <h2 className="big-title leading-14">
              Từ Yêu Cầu Tới <br /> Sản Xuất - Khởi Động <br /> Dự Án Suôn Sẻ
            </h2>
            <p className="text-neutral-500">
              Biến yêu cầu và bản thiết kế của bạn thành hiện thực mỗi khi bạn
              chi tiêu hoặc tiêu tiền ở nước ngoài. Bắt đầu chỉ trong vài phút.
            </p>
            <div className="relative aspect-[2.1] overflow-hidden rounded-sm">
              <Image
                fill
                className="object-cover"
                src="/benefit-2.jpg"
                alt="benefit-2"
              />
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-5">
                <div className="bg-secondary size-9 rounded-sm text-primary text-sm shrink-0 flex items-center justify-center">
                  {step.id}
                </div>
                <div>
                  <p className="text-neutral-900 text-[20px] font-[800] mb-4">
                    {step.title}
                  </p>
                  <span className="text-neutral-500 text-[18px]">
                    {step.description}
                  </span>
                </div>
              </div>
            ))}
            <Button variant="outline">
              <Link href="#" className="uppercase">
                Liên hệ chúng tôi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
