"use client";

import { LoadingScreen } from "@/components/common/loading-screen";
import { ReactNode, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {children}
    </>
  );
}
