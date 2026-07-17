import {
  Fuel,
  Gauge,
  MapPin,
  Heart,
  Settings,
  Calendar,
  Shield,
} from "lucide-react";
import { PiSeat } from "react-icons/pi";
import { Button } from "../components/ui/button";
import DetailTabs from "../components/DetailTabs";
import { useCar } from "../hooks/useCar";
import { h1 } from "framer-motion/client";

const CarDetails = () => {
  const { carInfo, isFound } = useCar();

  if (!isFound) {
    return <h1 className="text-4xl font-medium">Car not Found</h1>;
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-16 px-5 gap-8 lg:gap-12">
      <div className="relative">
        <div className="bg-black aspect-squar p-8 rounded-3xl sticky top-32">
          <img
            className="w-full h-full  object-contai"
            src={carInfo.image}
            alt={carInfo.name}
          />
          {carInfo.featured && (
            <div className="px-2 py-1 bg-green-900 text-white font-medium text-sm rounded-ful absolute top-7">
              featured
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="space-y-3">
          <p className="text-lime-300">{carInfo.brand}</p>
          <h5 className="text-white text-4xl font-bold">{carInfo.name}</h5>
          <p className="text-gray-400">
            {carInfo.year} • {carInfo.color}
          </p>
          <h5 className="text-green-500 text-4xl font-bold">
            {formatPrice(carInfo.price)}
          </h5>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="p-5 bg-black/70 space-y-2 rounded-2xl border hover:border-lime-300 hover:scale-101 duration-200">
            <div className="flex items-center gap-2 text-lime-300">
              <Gauge />
              <span className="uppercase">Mileage</span>
            </div>
            <p className="text-white font-medium text-lg">{carInfo.mileage}</p>
          </div>
          <div className="p-5 bg-black/70 space-y-2 rounded-2xl border hover:border-lime-300 hover:scale-101 duration-200">
            <div className="flex items-center gap-2 text-lime-300">
              <Fuel />
              <span className="uppercase">Fuel</span>
            </div>
            <p className="text-white font-medium text-lg">{carInfo.fuel}</p>
          </div>
          <div className="p-5 bg-black/70 space-y-2 rounded-2xl border hover:border-lime-300 hover:scale-101 duration-200">
            <div className="flex items-center gap-2 text-lime-300">
              <Settings />
              <span className="uppercase">Transmission</span>
            </div>
            <p className="text-white font-medium text-lg">
              {carInfo.transmission}
            </p>
          </div>
          <div className="p-5 bg-black/70 space-y-2 rounded-2xl border hover:border-lime-300 hover:scale-101 duration-200 ">
            <div className="flex items-center gap-2 text-lime-300">
              <PiSeat />
              <span className="uppercase">Seats</span>
            </div>
            <p className="text-white font-medium text-lg">{carInfo.seats}</p>
          </div>
        </div>

        <div className="flex flex-co items-center gap-5 mt-7">
          <button className="py-2 px-5 lg:px-10 flex items-center gap-4 rounded-lg text-white bg-green-900">
            <Calendar size={15} />
            <span>Book Test Drive</span>
          </button>
          <button className="py-2 px-5 lg:px-10 rounded-lg text-white bg-green-900">
            Make Inquiry
          </button>
        </div>

        <div>
          <div className="bg-black text-lime-300 flex p-5 w-fit mt-5 rounded-2xl gap-3">
            <Shield />
            <div>
              <h5>{carInfo.warranty}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-aut">
        <DetailTabs />
      </div>
    </section>
  );
};

export default CarDetails;
