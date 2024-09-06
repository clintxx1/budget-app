import TimelineItem from "@/components/timelineItem";
import { Minimize2, Minus, Plus } from "lucide-react";
import React from "react";

const Timeline = () => {
  return (
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
  );
};

export default Timeline;
