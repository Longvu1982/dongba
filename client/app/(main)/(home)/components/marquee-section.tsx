import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";

const MarqueeSection = () => {
  return (
    <div className="container mx-auto py-[100px]">
      <p className="font text-neutral-300 text-center mb-16">
        Được các nhà lãnh đạo công nghiệp đứng đầu trên toàn quốc tin tưởng
      </p>
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {new Array(6).fill(null).map((_, index) => (
            <MarqueeItem className="ml-20" key={index}>
              <Image
                alt={`Placeholder ${index + 1}`}
                src={`/company-${index + 1}.png`}
                width={300}
                height={200}
                className="h-15 w-auto"
              />
              {/* </div> */}
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
