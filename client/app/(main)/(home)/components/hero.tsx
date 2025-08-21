"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { AnimatedCounter } from "@/components/common/animated-counter";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative py-[36px]"
    >
      <div className="container mx-auto text-white">
        <div>
          <motion.h1
            variants={fadeIn("up", 0.3)}
            className="text-7xl leading-22 font-[500] uppercase w-full"
          >
            <p className="text-left">Giải pháp cơ khí</p>
            <p className="text-center">Dẫn lối thành công</p>
          </motion.h1>

          <motion.div variants={fadeIn("up", 0.35)}>
            <Separator className="bg-white my-6" />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            className="flex gap-2 py-1 justify-between items-start mb-15"
          >
            <span className="text-small font-medium uppercase">
              / Trở thành doanh nghiệp hàng đầu /
            </span>
            <div className="flex flex-col items-start gap-5 w-[320px] text-left">
              <span className="text-[18px]">
                Tiên phong trong tương lai của kỹ thuật và sản xuất công nghiệp
                với công nghệ tiên tiến và quy trình do chuyên gia điều hành.
              </span>
              <span className="text-[18px]">
                Phương pháp tiếp cận toàn diện của chúng tôi cung cấp các giải
                pháp chính xác, có khả năng mở rộng giúp doanh nghiệp đạt được
                mục tiêu sản xuất.
              </span>
              <Button variant="outline-secondary">SẢN PHẨM CHÚNG TÔI</Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex justify-between items-center"
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-widest">
                Mã Sản Phẩm
              </p>
              <AnimatedCounter
                value={200}
                suffix="+"
                className="text-8xl font-light"
                width={177}
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-widest">
                Diện Tích Nhà Xưởng
              </p>
              <p className="text-8xl font-light flex items-center">
                <AnimatedCounter
                  value={3000}
                  className="text-8xl font-light"
                  width={259}
                />
                <span className="text-8xl font-light">
                  m<sup>2</sup>
                </span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-widest">
                Máy Móc Chuyên Dụng
              </p>
              <AnimatedCounter
                value={250}
                suffix="+"
                className="text-8xl font-light"
                width={177}
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-1">
          <div className="absolute inset-0 -z-2">
            <Image
              fill
              src="/hero.png"
              alt="hero"
              className="opacity-50 object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-[#1D35A0aa]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
