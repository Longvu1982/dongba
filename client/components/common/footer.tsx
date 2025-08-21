import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="relative text-white! pt-[100px] pb-[50px]">
      <div className="container mx-auto">
        <div className="absolute inset-0 -z-1">
          <Image
            src="/promise.png"
            alt="promise"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="space-y-[115px]">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="big-title text-white! leading-14!">
                Liên Hệ Tới Đông Ba <br /> Chúng Tôi!
              </h2>
            </div>
            <div className="space-y-6">
              <Input
                placeholder="Tên Đầy Đủ"
                className="bg-transparent border-0 border-b-[1px] 
                        border-white rounded-none px-0 py-3 
                        text-white placeholder:text-white/90 
                        focus:border-white focus:ring-0 focus-visible:ring-0 
                        focus-visible:ring-offset-0 focus-visible:border-white"
              />

              <Input
                placeholder="Địa Chỉ Email"
                className="bg-transparent border-0 border-b-[1px]
                        border-white rounded-none px-0 py-3 
                        text-white placeholder:text-white/90 
                        focus:border-white focus:ring-0 focus-visible:ring-0 
                        focus-visible:ring-offset-0 focus-visible:border-white"
              />
              <Input
                placeholder="Tên Công Ty"
                className="bg-transparent border-0 border-b-[1px]
                        border-white rounded-none px-0 py-3 
                        text-white placeholder:text-white/90 
                        focus:border-white focus:ring-0 focus-visible:ring-0 
                        focus-visible:ring-offset-0 focus-visible:border-white"
              />
              <Input
                placeholder="Lĩnh Vực Sản Phẩm"
                className="bg-transparent border-0 border-b-[1px]
                        border-white rounded-none px-0 py-3 
                        text-white placeholder:text-white/90 
                        focus:border-white focus:ring-0 focus-visible:ring-0 
                        focus-visible:ring-offset-0 focus-visible:border-white"
              />
              <Textarea
                rows={4}
                placeholder="Lời Nhắn Của Bạn"
                className="bg-transparent border-0 border-b-[1px] min-h-24
                        border-white rounded-none px-0 py-3 
                        text-white placeholder:text-white/90 
                        focus:border-white focus:ring-0 focus-visible:ring-0 
                        focus-visible:ring-offset-0 focus-visible:border-white"
              />
              <Button
                variant="secondary"
                wrapperClassName="w-full"
                className="w-full"
                arrow={false}
              >
                NỘP ĐƠN
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="w-[286px]">
              <Image
                src="/logo-white.png"
                alt="logo"
                width={286}
                height={60}
                className="mb-2"
              />
              <p className="text-sm mb-[50px]">
                Xây dựng giải pháp hướng tới quá trình. Chúng tôi xây dựng. Bạn
                phát triển. Cùng nhau chúng ta dẫn đầu.
              </p>
              <Button variant="secondary" wrapperClassName="mb-[70px]">
                <Link href="#">Thêm Về Chúng Tôi</Link>
              </Button>
              <div>
                <p>Theo dõi chúng tôi</p>
              </div>
            </div>

            <div className="">
              <div className="grid grid-cols-3 mb-[74px]">
                <div className="space-y-5">
                  <p>Trang Chủ</p>
                  <div className="space-y-5 text-sm text-neutral-300">
                    <p>Về Chúng Tôi</p>
                    <p>Lời Thực Chứng</p>
                    <p>Đội Ngũ Lãnh Đạo</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <p>Về Chúng Tôi</p>
                  <div className="space-y-5 text-sm text-neutral-300">
                    <p>Sản Phẩm</p>
                    <p>Tại Sao Chọn Chúng Tôi</p>
                    <p>Lịch Sử Chúng Tôi</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <p>Links Hữu Dụng</p>
                  <div className="space-y-5 text-sm text-neutral-300">
                    <p>Liên Hệ</p>
                    <p>Nghề Nghiệp</p>
                    <p>Câu hỏi thường gặp</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1 mb-[18px]">
                <p className="">Liên Hệ</p>
                <p className="text-sm text-neutral-300">
                  <Link href="tel:+84987654321">+84 987 654 321</Link>
                </p>
                <p className="text-sm text-neutral-300">
                  <Link href="mailto:dongbaco@gmail.com">
                    dongbaco@gmail.com
                  </Link>
                </p>
              </div>

              <div className="grid grid-cols-2 items-center">
                <div className="space-y-1">
                  <p className="">Địa Điểm</p>
                  <p className="text-sm text-neutral-300">
                    Đội 9, xóm Mới, xã Chương Dương, Thành Phố Hà Nội, Việt Nam.
                  </p>
                </div>
                <div className="text-center ml-auto">
                  <p className="text-[20px] font-semibold">8.00 - 17.00</p>
                  <p className="text-sm">
                    T2 &ndash;&ndash;&ndash;&ndash;&ndash;&ndash; T7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-white mt-20 mb-5" />
        <p className="text-sm text-center">
          © 2024 Designership. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
