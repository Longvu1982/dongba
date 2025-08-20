import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Linkedin, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const professorsList = [
  [{}, {}, {}],
  [{}, {}, {}, {}],
];

const ProfessorsSection = () => {
  return (
    <div className="bg-secondary py-[50px]">
      <div className="container mx-auto">
        <h2 className="text-primary uppercase tracking-wide font-semibold text-center mb-3">
          / Đội ngũ lãnh đạo /
        </h2>
        <h3 className="big-title text-center mb-5">
          Chuyên Gia Xuất Sắc Trong ngành
        </h3>
        <p className="font-inter text-neutral-900 text-center text-base">
          Gặp gỡ những cá nhân tài nằng đứng sau thành công của chúng tôi.
        </p>

        <div className="flex flex-col justify-center my-20">
          {professorsList.map((chunk, index) => (
            <div
              key={index}
              className={cn("grid grid-cols-3 gap-5 mb-10", {
                "grid-cols-4": index % 2 === 1,
              })}
            >
              {chunk.map((item, index) => (
                <ProfessorProfile key={index} />
              ))}
            </div>
          ))}
        </div>

        <div className="space-y-6 flex flex-col items-center">
          <h3 className="big-title text-center text-[44px]!">
            Chúng tôi đang tuyển dụng!
          </h3>
          <p className="-mt-3">
            Hãy tham gia đội ngũ năng động của chúng tôi và phát triển sự nghiệp
            của bạn.
          </p>
          <Button variant={"outline"}>
            <Link href="#">Vị trí đang mở</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProfessorProfile = () => {
  return (
    <div className="flex flex-col items-center gap-5 font-inter text-center text-neutral-900">
      <div className="w-[120px] h-[120px] rounded-full relative overflow-hidden">
        <Image
          src="/VuTuanLong.jpg"
          alt="VuTuanLong"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-xl">Vũ Tuấn Long</h4>
        <p className="text-[18px]">CEO</p>
      </div>
      <p className="text-neutral-500">
        Chỉ đạo các dự án bằng chuyên môn và sự tận tâm, đảm bảo hoàn thành đúng
        thời hạn và chất lượng.
      </p>
      <div className="flex text-primary gap-[14px]">
        <Link href="#">
          <Network size={18} />
        </Link>
        <Link href="#">
          <Network size={18} />
        </Link>
        <Link href="#">
          <Network size={18} />
        </Link>
      </div>
    </div>
  );
};

export default ProfessorsSection;
