"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-red-500 text-white text-4xl">
    TEST LOADER
  </div>
);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]">
      <Image
        src="/images/logo.png"
        alt="Ayush Suman"
        width={90}
        height={90}
        className="animate-pulse"
      />

      <h1 className="mt-6 text-3xl font-bold tracking-[0.25em] text-white">
        AYUSH SUMAN
      </h1>

      <p className="mt-3 text-sm tracking-[0.35em] text-white/60 uppercase">
        Brand Identity Designer
      </p>
    </div>
  );
}