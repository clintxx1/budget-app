"use client";

import * as React from "react";
import { Pie, PieChart, Label } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "./ui/chart";

const chartConfig = {
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

type ChartProps = {
  chartData: {
    name: string;
    value: number;
    fill: string;
  }[];
};
export function BalanceChart({ chartData }: ChartProps) {
  const balance = chartData[0].value;
  const percentage = Number((balance / 35000) * 100 * 0.01);
  const endAngle = 450 * Number(percentage);

  return (
    <Card className="flex border-none shadow-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={75}
              outerRadius={90}
              strokeWidth={5}
              startAngle={90}
              endAngle={450}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-[#2B42D6] text-2xl font-bold"
                        >
                          ${balance.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-xs"
                        >
                          Balance
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
