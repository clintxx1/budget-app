import TimelineItem from "@/components/timelineItem";
import { useAtom } from "jotai";
import { Minimize2, Minus, Plus } from "lucide-react";
import React from "react";
import { loadingAtom } from "../store/atoms";
import { Skeleton } from "@/components/ui/skeleton";

const Timeline = () => {
  const [loading] = useAtom(loadingAtom);
  return (
    <section>
      {loading ? (
        <div className="flex flex-col h-full">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 h-full space-y-8">
            <div className="space-y-2 h-full ml-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-5 w-48" />
            </div>
            <div className="space-y-2 h-full ml-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-5 w-48" />
            </div>
          </ol>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 h-full">
            <TimelineItem
              date="Aug 24, 2024"
              icon={<Minimize2 className="h-4 w-4" />}
              description="Transferred $100 to Income 2 Name"
              isFirst
            />
            <TimelineItem
              date="Aug 24, 2024"
              icon={<Minus className="h-4 w-4" />}
              description="Spent $50 from Income 3 Name on Groceries"
            />
            <TimelineItem
              date="Aug 24, 2024"
              icon={<Plus className="h-4 w-4" />}
              description="Added $150 on Income 1 Name"
              isLast
            />
          </ol>
        </div>
      )}
    </section>
  );
};

export default Timeline;
