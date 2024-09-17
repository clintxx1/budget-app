import { useAtom } from "jotai";
import React from "react";
import { loadingAtom } from "../store/atoms";
import { Skeleton } from "@/components/ui/skeleton";

export default function Savings() {
  const [loading] = useAtom(loadingAtom);
  return (
    <section>
      {loading ? (
        <div className="bg-white p-5 rounded-lg text-muted-foreground space-y-3">
          <Skeleton className="h-8 w-24" />
          <div className="space-y-2">
            <Skeleton className="h-7 w-36" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
      ) : (
        <div className="bg-white p-5 rounded-lg text-muted-foreground space-y-3">
          <p className="font-semibold text-lg">Savings</p>
          <div>
            <p className="text-primary font-semibold text-lg">$500</p>
            <p className="font-medium text-xs">Saving $1,000 Vacation</p>
          </div>
        </div>
      )}
    </section>
  );
}
