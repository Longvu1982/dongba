import Image from "next/image";
import React from "react";

const cards = [
  {
    imgUrl: "/promise-card-1.jpg",
    title: "Chuyên Gia Quản Lý Cho Kết Quả Tối Ưu",
    description:
      "Hệ thống quản lý chuyên nghiệp chúng tôi đảm bảo hoạt động liền mạch và giao hàng đúng hạn.",
  },
  {
    imgUrl: "/promise-card-2.jpg",
    title: "Đội Ngũ Chuyên Gia Lành Nghề",
    description:
      "Đội ngũ kỹ thuật lành nghề của chúng tôi luôn tận tâm đổi mới và đảm bảo chất lượng.",
  },
  {
    imgUrl: "/promise-card-3.jpg",
    title: "Giải Pháp Toàn Diện",
    description:
      "Khám phá cách chúng tôi có thể nâng tầm dự án của bạn bằng chuyên môn và sự cầu tiến.",
  },
];

const Promises = () => {
  return (
    <div className="relative py-[100px]">
      <div className="absolute inset-0 -z-1 bg-[#0C2389ee]"></div>
      <div className="absolute inset-0 -z-1">
        <Image
          src="/promise.png"
          alt="promises-bg"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="container mx-auto text-white">
        <p className="uppercase mb-3">/ CHẤT LƯỢNG /</p>
        <h2 className="text-[52px] font-medium w-3/5 mb-[100px] leading-14">
          Cam Kết Của Chúng Tôi Về Sự Xuất Sắc Trong Sản Xuất
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {cards.map((item) => (
            <div key={item.imgUrl} className="space-y-4">
              <div className="w-full aspect-[1.8] relative overflow-hidden">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition-all"
                />
              </div>
              <h3 className="text-[20px] font-semibold">{item.title}</h3>
              <p className="text-neutral-200 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promises;
