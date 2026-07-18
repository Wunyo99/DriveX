import {
  Fuel,
  Gauge,
  MapPin,
  Heart,
  Settings,
  Calendar,
  Shield,
  TriangleAlertIcon,
} from "lucide-react";
import { PiSeat } from "react-icons/pi";
import { Button } from "../components/ui/button";
import DetailTabs from "../components/DetailTabs";
import { useCar } from "../hooks/useCar";
import CarActionDialog from "../components/CarActionDialog";
import { useState } from "react";
import { Link } from "react-router-dom";
const CarDetails = ({ car }) => {
  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const handleOpen = (type) => {
    setDialogType(type);
    setOpen(true);
  };

  const { carInfo, isFound } = useCar();

  if (!isFound) {
    return <div className="h-scree py-24 flex flex-col items-center justify-center">
      <TriangleAlertIcon size={50} className="text-lime-300 mb-5"/>
      <h1 className="text-4xl font-medium text-white italic">Car not Found!</h1>;
      <Link to="/" className="bg-green-900 py-2 px-5 rounded-full text-white font-medium hover:bg-lime-300 hover:text-black transition-colors">Back to home</Link>
    </div>;
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-16 px-5 gap-8 lg:gap-12">
      <div className="relative">
        <div className="bg-black/70 p-5 rounded-3xl sticky top-32">
          <img
            className="w-full h-full  object-contain rounded-xl"
            src={carInfo.image}
            alt={carInfo.name}
          />
          {carInfo.featured && (
            <div className="px-2 py-1 bg-green-900 rounded-tl-xl text-white font-medium text-sm rounded-ful absolute top-5">
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
          <button
            onClick={() => handleOpen("test-drive")}
            className="py-2 px-5 lg:px-10 flex items-center gap-4 rounded-lg text-white font-medium bg-green-900 cursor-pointer hover:text-black hover:bg-lime-300 transition-colors"
          >
            <Calendar size={15} />
            <span>Book Test Drive</span>
          </button>
          <button
            onClick={() => handleOpen("inquiry")}
            className="py-2 px-5 lg:px-10 rounded-lg text-white font-medium bg-green-900 cursor-pointer hover:text-black hover:bg-lime-300 transition-colors"
          >
            Make Inquiry
          </button>
        </div>

        <CarActionDialog
          open={open}
          setOpen={setOpen}
          type={dialogType}
          car={carInfo}
        />

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
