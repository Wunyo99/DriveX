import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useCar } from "../hooks/useCar";
import { Check } from "lucide-react";

const DetailTabs = () => {
  const { carInfo } = useCar();
  return (
    <Tabs defaultValue="overview" className="md:w-2xl lg:w-5xl">
      <TabsList className="bg-black">
        <TabsTrigger
          className="text-lime-300 hover:text-white data-active:bg-green-900 data-active:text-white cursor-pointer"
          value="overview"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          className="text-lime-300 hover:text-white data-active:bg-green-900 data-active:text-white cursor-pointer"
          value="specifications"
        >
          Specifications
        </TabsTrigger>
        <TabsTrigger
          className="text-lime-300 hover:text-white data-active:bg-green-900 data-active:text-white cursor-pointer"
          value="features"
        >
          Features
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card className="bg-black/70">
          <CardHeader>
            <CardTitle className="text-lime-300">About this vehicle</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {carInfo.description}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="specifications">
        <Card className="bg-black/70">
          <CardContent className="text-sm text-muted-foreground">
            <div className="rounded-2xl border-3 border-black p-6 md:p-8 shadow-card grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                ["Engine", carInfo.engine],
                ["Horsepower", `${carInfo.horsepower} hp`],
                ["Torque", carInfo.torque],
                ["Transmission", carInfo.transmission],
                ["Drive Type", carInfo.driveType],
                ["Fuel Economy", carInfo.fuelEconomy],
                ["Doors", carInfo.doors],
                ["Seats", carInfo.seats],
                ["Color", carInfo.color],
                ["Mileage", carInfo.mileage],
                ["Year", carInfo.year],
                ["Warranty", carInfo.warranty],
              ].map(([key, value]) => (
                <div
                  key={String(key)}
                  className="flex justify-between border-b border-border py-2 last:border-none"
                >
                  <span className="text-sm text-lime-300">{key}</span>
                  <span className="text-sm ">{value}</span>
                </div>
              ))}
            </div>{" "}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="features">
        <Card className="bg-black/70">
          <CardContent className="text-sm">
            <div className="rounded-2xl border-3 border-black p-6 md:p-8 shadow-card grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {carInfo.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm ">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-green-800">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className=" text-muted-foreground"> {f}</span>
                </div>
              ))}
            </div>{" "}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
export default DetailTabs;
