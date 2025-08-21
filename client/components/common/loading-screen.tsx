"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 300); // Small delay before hiding
          return 100;
        }
        return prev + 8;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-blue-800 to-blue-700 flex items-center justify-center z-50">
      <div className="text-center">
        <div>
          <Image
            src="/logo-white.png"
            alt="logo"
            width={142 * 1.5}
            height={32 * 1.5}
            className="mx-auto mb-4 block"
          />
        </div>

        {/* Loading Animation */}
        <div className="mb-6">
          <div className="w-64 h-2 bg-blue-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-white/80 text-sm">
          Đang tải... {Math.round(progress)}%
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
