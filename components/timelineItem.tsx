import React from "react";

type TimelineItemProps = {
  date: string;
  icon: React.ReactNode;
  description: string;
  isFirst?: boolean;
  isLast?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  icon,
  description,
  isFirst,
  isLast,
}) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
        {date}
      </time>
      <div className="flex items-center justify-start gap-3">
        <>{icon}</>
        <p className="text-base font-normal">{description}</p>
      </div>
    </li>
  );
};

export default TimelineItem;
