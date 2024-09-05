"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAtom } from "jotai";
import { dateAtom } from "@/app/store/atoms";

export function DatePicker() {
  const [date, setDate] = useAtom(dateAtom);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "gap-8 justify-between text-left font-normal text-muted-foreground",
          )}
        >
          {date ? (
            format(date, "MMMM dd, yyyy")
          ) : (
            <span>{format(new Date(), "MMMM dd, yyyy")}</span>
          )}
          <CalendarIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
