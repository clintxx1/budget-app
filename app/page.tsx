"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "./_components/timeline";
import { BalanceChart } from "@/components/customChart";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Savings from "./_components/savings";
import Funds from "./_components/funds";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useAtom } from "jotai";
import { loadingAtom } from "./store/atoms";

export default function Home() {
  const [loading, setLoading] = useAtom<boolean>(loadingAtom);
  const chartData = [
    { name: "balance", value: 25000, fill: "#2B42D6" },
    { name: "others", value: 10000, fill: "#D1D1D1" },
  ];

  useEffect(() => {
    const loader = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    loader();
  }, []);
  return (
    <div className="flex items-start w-full my-5 gap-5 px-32">
      <div className="w-1/4 space-y-2">
        {loading ? (
          <div className="bg-white p-2 rounded-lg flex flex-col gap-2 px-5 overflow-hidden justify-center">
            <Skeleton className="h-44 w-44 rounded-full self-center" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
          <div className="bg-white p-2 rounded-lg flex flex-col gap-2 px-5 overflow-hidden justify-center">
            <BalanceChart chartData={chartData} />
            <Button className="space-x-1 w-full self-center">
              <Plus className="h-4 w-4" />
              <p>Add Funds</p>
            </Button>
            <Button
              className="space-x-1 border-black w-full self-center"
              variant={"outline"}
            >
              <Minus className="h-4 w-4" />
              <p>Deduct Funds</p>
            </Button>
          </div>
        )}
        <Savings />
        <Funds />
      </div>
      <Tabs
        defaultValue="transactions"
        className="w-3/4 h-full rounded-lg py-0"
      >
        <TabsList className="bg-white w-full justify-start px-2 py-6">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <Timeline />
        </TabsContent>
        <TabsContent value="expenses">Expenses</TabsContent>
        <TabsContent value="savings">Savings</TabsContent>
      </Tabs>
    </div>
  );
}
