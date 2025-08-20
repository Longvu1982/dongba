import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from "react";

interface BackGroundImageProps {
  url: string;
  alt: string;
  children?: ReactNode;
  aspectRatio: string;
  className?: string;
  overlay?: boolean;
  overlayClassName?: string;
}

const BackGroundImage = ({
  url,
  alt,
  children,
  aspectRatio,
  className,
  overlayClassName,
  overlay = true,
}: BackGroundImageProps) => {
  return (
    <div className={cn("h-auto relative", className)} style={{ aspectRatio }}>
      <Image
        src={url}
        alt={alt}
        fill
        className={cn("object-cover", overlay && "opacity-50")}
      />

      {overlay ? (
        <div
          className={cn("absolute inset-0 bg-[#1D35A099]", overlayClassName)}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default BackGroundImage;
