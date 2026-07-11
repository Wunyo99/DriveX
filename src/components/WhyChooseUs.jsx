import {
  Car,
  NotepadTextIcon,
  Phone,
  ArrowUpRight,
  HandCoins,
  Settings,
} from "lucide-react";
import { BiMoney } from "react-icons/bi";
import bugattiPng from "../assets/cars/bg.png";

const WhyChooseUs = () => {
  const qualities = [
    { icon: <Car size={35} />, h: "200+ Vehicles", p: "Wide Range of Cars" },
    { icon: <Phone size={35} />, h: "24/7 Support", p: "We're Here Anytime" },
    {
      icon: <NotepadTextIcon size={35} />,
      h: "Easy Booking",
      p: "Book in Just 2 Min",
    },
    {
      icon: <BiMoney size={35} />,
      h: "Best Price",
      p: "Price Match Guarantee",
    },
  ];
  return (
    // <section className="px-10 py-5">
    //   <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 items-cente justify-betwee border border-lime-300 bg-green-950 rounded-2xl p-5">
    //     {" "}
    //     {qualities.map((q, index) => (
    //       <div key={index}>
    //         <div className="flex items-center gap-5">
    //           <div className="text-lime-300">{q.icon}</div>
    //           <div className="flex flex-col text-white">
    //             <h5>{q.h}</h5>
    //             <p className="text-sm">{q.p}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className="grid grid-cols-1 items-center lg:grid-cols-3 p-10 gap-7 bg-green-950">
      <div className=" flex flex-col md:flex-row lg:flex-col gap-8 justify-between lg:h-110">
        <div className="flex flex-col items-start gap-5  border border-lime-200 p-4 rounded-3xl">
          <div className="bg-green-200 p-2 rounded-full">
            <Car size={35} className="text-green-950" />
          </div>
          <div className="space-y-2">
            <h1 className="text-lg text-white font-medium">
              Wide Selection of Vehicles
            </h1>
            <p className="text-white">
              Choose from a diverse selection of cars to suit your style and
              budget, whether you're looking to buy or rent.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5  border border-lime-200 p-4 rounded-3xl">
          <div className="bg-green-200 p-2 rounded-full">
            <BiMoney size={35} className="text-green-950" />
          </div>
          <div className="space-y-2">
            <h1 className="text-lg text-white font-medium">
              Flexible Financing Options
            </h1>
            <p className="text-white">
              Get customized financing plans that fit your budget, making it
              easier to drive away in your dream car
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src={bugattiPng} alt="" />
      </div>

      <div className=" flex flex-col md:flex-row lg:flex-col gap-8 justify-between lg:h-110">
        <div className="flex flex-col items-start gap-5  border border-lime-200 p-4 rounded-3xl">
          <div className="bg-green-200 p-2 rounded-full">
            <HandCoins size={35} className="text-green-950" />
          </div>
          <div className="space-y-2">
            <h1 className="text-lg text-white font-medium">
              Transparent Pricing
            </h1>
            <p className="text-white">
              We believe in clear, upfront pricing with no hidden fees, ensuring
              you get the best deal on your vehicle
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5  border border-lime-200 p-4 rounded-3xl">
          <div className="bg-green-200 p-2 rounded-full">
            <Settings size={30} className="text-green-950" />
          </div>
          <div className="space-y-2">
            <h1 className="text-lg text-white font-medium">
              Exceptional Customer Service
            </h1>
            <p className="text-white">
              Our team is dedicated to providing personalized support, ensuring
              a seamless experience from start to finish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
