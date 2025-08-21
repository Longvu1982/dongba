"use client";

import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  width?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 3,
  width = 0,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const currentValue = Math.floor(latest).toLocaleString();

        ref.current.textContent = currentValue.padStart(
          value.toString().length,
          "0"
        );
      }
    });
  }, [springValue, suffix, value]);

  return (
    <span className="flex items-center">
      <span className={cn("block", className)} style={{ width }} ref={ref}>
        0
      </span>
      <span className={className}>{suffix}</span>
    </span>
  );
}
