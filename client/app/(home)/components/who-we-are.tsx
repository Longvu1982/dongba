import BackGroundImage from "@/components/common/backgroun-image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="pt-[100px] pb-[50px]">
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-primary uppercase font-semibold text-sm tracking-wide">
            / Chúng tôi là ai /
          </h2>
          <span className="block max-w-4/5 text-neutral-700 text-base">
            Tại Đông Ba, chúng tôi chuyên sản xuất khuôn mẫu và đồ gá tiên tiến
            chất lượng cao, đáp ứng nhu cầu của nhiều ngành công nghiệp khác
            nhau. Cam kết về chất lượng vượt trội của chúng tôi đảm bảo giao
            hàng đúng hẹn và giá cả cạnh tranh, biến chúng tôi thành đối tác sản
            xuất đáng tin cậy của bạn.
          </span>
          <Button className="" variant="outline">
            <Link href="/about">Lịch sử chúng tôi</Link>
          </Button>
          <Button className="">
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
    </div>
  );
};

export default WhoWeAre;
