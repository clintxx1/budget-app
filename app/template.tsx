"use client";

import Navigation from "@/components/navBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden">
      <Navigation />
      {children}
    </div>
  );
}
