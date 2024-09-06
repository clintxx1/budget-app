import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "./_components/timeline";

export default function Home() {
  return (
    <div className="flex items-start w-full my-5 gap-5 px-20">
      {/* TODO - Content */}
      <div className="w-1/4 space-y-2">
        <div className="bg-white p-2 rounded-lg h-[30dvh]"></div>
        <div className="bg-white p-2 rounded-lg h-[35dvh]"></div>
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
