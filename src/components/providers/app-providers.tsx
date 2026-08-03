"use client";

import dynamic from "next/dynamic";

import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { LoadingScreen } from "@/components/effects/loading-screen";

const CustomCursor = dynamic(
  () =>
    import("@/components/effects/custom-cursor").then(
      (mod) => mod.CustomCursor,
    ),
  { ssr: false },
);

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <CustomCursor />
      {children}
    </SmoothScroll>
  );
}
