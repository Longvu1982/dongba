import BackGroundImage from "@/components/common/backgroun-image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productionsDescroptions = [
  {
    id: 1,
    title: "Khuôn mẫu, JIG và đồ gá được chế tạo chuyên nghiệp cho sản phẩm.",
    description:
      "Chúng tôi xử lý thiết kế khuôn mẫu, jig và đồ gá linh, phụ kiện phục vụ quá trình trao đổi và lấy thông tin yêu cầu từ khách.",
  },
  {
    id: 2,
    title: "Sản xuất linh kiện chính xác cho ô tô, điện tử và nhiều hơn nữa",
    description:
      "Khả năng gia công tiên tiến của chúng tôi đảm bảo độ chính xác và độ tin cậy trong mọi thành phần.",
  },
  {
    id: 3,
    title:
      "JIG và đồ gá được thiết kế riêng để nâng cao quy trình sản xuất của chúng tôi",
    description:
      "Chúng tôi thiết kế các JIG và đồ gá tùy chỉnh giúp tối ưu hóa hiệu quả và độ chính xác trong việc tùy chỉnh sản phẩm.",
  },
];

const WhoWeAre = () => {
  return (
    <div className="pt-[100px] pb-[50px]">
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <h3 className="text-primary uppercase font-semibold text-sm tracking-wide">
            / Chúng tôi là ai /
          </h3>
          <span className="block max-w-4/5 text-neutral-700 text-base mb-4">
            Tại Đông Ba, chúng tôi chuyên sản xuất khuôn mẫu và đồ gá tiên tiến
            chất lượng cao, đáp ứng nhu cầu của nhiều ngành công nghiệp khác
            nhau. Cam kết về chất lượng vượt trội của chúng tôi đảm bảo giao
            hàng đúng hẹn và giá cả cạnh tranh, biến chúng tôi thành đối tác sản
            xuất đáng tin cậy của bạn.
          </span>
          <Button className="" variant="outline">
            <Link href="/about">Lịch sử chúng tôi</Link>
          </Button>
        </div>
        <BackGroundImage
          url="/who-we-are.jpg"
          alt="who-we-are"
          aspectRatio="1.5"
          overlay={false}
        />
      </div>
      <Separator className="container mx-auto mt-[50px] bg-neutral-600" />

      <div className="container mx-auto py-[50px]">
        <div className="flex items-end justify-between mb-[50px]">
          <h2 className="big-title">
            Linh Hoạt và Sáng Tạo Từ <br /> Khâu Sản Xuất
          </h2>

          <Button>SẢN PHẨM CHÚNG TÔI</Button>
        </div>

        <div>
          {productionsDescroptions.map((item, index) => {
            const objectPositionMap = [
              "object-top",
              "object-center",
              "object-bottom",
            ];

            return (
              <div key={item.id}>
                <div className="grid grid-cols-14 items-center gap-x-10 px-9 py-8 relative overflow-hidden group">
                  <p className="col-span-2 text-xl font-semibold text-neutral-900 group-hover:text-neutral-50 transition-all duration-200">
                    / 0{item.id} /
                  </p>
                  <p className="col-span-4 text-base font-semibold text-neutral-900 group-hover:text-neutral-50 transition-all duration-200">
                    {item.title}
                  </p>
                  <p className="col-start-8 col-span-7 text-base font-normal text-neutral-500 group-hover:text-neutral-50 transition-all duration-200">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-full -top-full group-hover:top-0 bg-primary transition-all duration-200 -z-1">
                    <Image
                      fill
                      src="/who-we-are.jpg"
                      alt="who-we-are"
                      objectFit="cover"
                      className={cn("opacity-30", objectPositionMap[index])}
                    />
                  </div>
                </div>
                {index !== productionsDescroptions.length - 1 && (
                  <Separator className="container mx-auto bg-neutral-600" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
