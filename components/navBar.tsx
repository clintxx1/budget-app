"use client";
import React from "react";
import { DatePicker } from "./datepicker";
import { useAtom } from "jotai";
import { dateAtom } from "@/app/store/atoms";
import moment from "moment";
import { format } from "date-fns";

export default function Navigation() {
  const [date] = useAtom(dateAtom);
  return (
    <div className="flex items-center justify-between w-full py-8 px-32 bg-white">
      <p className="text-2xl font-bold">
        Budget for {format(date, "MMMM dd, yyyy")}
      </p>
      <DatePicker />
    </div>
  );
}
