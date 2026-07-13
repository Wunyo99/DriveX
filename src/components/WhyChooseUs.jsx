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
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className=" py- bg-green-950 w-[95%] rounded-3xl mx-auto mb-16 p-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-white text-4xl mb-5 text-center font-semibold"
      >
        Why Choose <span className="text-lime-300">DriveX</span>
      </motion.h1>
      <div className="grid grid-cols-1  items-center lg:grid-cols-3  gap-7">
        <div className=" flex flex-col md:flex-row lg:flex-col gap-8 justify-between lg:h-110">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-5  border border-lime-200 p-4 rounded-3xl hover:rotate-1 hover:shadow-2xl group"
          >
            <div className="bg-green-200 group-hover:bg-lime-300 p-2 rounded-full">
              <Car size={35} className="text-green-950" />
            </div>
            <div className="space-y-2">
              <h1 className="text-lg text-lime-300 font-medium">
                Wide Selection of Vehicles
              </h1>
              <p className="text-white">
                Choose from a diverse selection of cars to suit your style and
                budget, whether you're looking to buy or rent.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-5  border border-lime-200 p-4 rounded-3xl hover:rotate-1 hover:shadow-2xl group"
          >
            <div className="bg-green-200 group-hover:bg-lime-300 p-2 rounded-full">
              <BiMoney size={35} className="text-green-950" />
            </div>
            <div className="space-y-2">
              <h1 className="text-lg text-lime-300 font-medium">
                Flexible Financing Options
              </h1>
              <p className="text-white">
                Get customized financing plans that fit your budget, making it
                easier to drive away in your dream car
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <img src={bugattiPng} alt="bugatti" className="hover:scale-102" />
        </motion.div>

        <div className=" flex flex-col md:flex-row lg:flex-col gap-8 justify-between lg:h-110">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-5  border border-lime-200 p-4 rounded-3xl hover:-rotate-1 hover:shadow-2xl group"
          >
            <div className="bg-green-200 group-hover:bg-lime-300 p-2 rounded-full">
              <HandCoins size={35} className="text-green-950" />
            </div>
            <div className="space-y-2">
              <h1 className="text-lg text-lime-300 font-medium">
                Transparent Pricing
              </h1>
              <p className="text-white">
                We believe in clear, upfront pricing with no hidden fees,
                ensuring you get the best deal on your vehicle
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-5  border border-lime-200 p-4 rounded-3xl hover:-rotate-1 hover:shadow-2xl group"
          >
            <div className="bg-green-200 group-hover:bg-lime-300 p-2 rounded-full">
              <Settings size={30} className="text-green-950" />
            </div>
            <div className="space-y-2">
              <h1 className="text-lg text-lime-300 font-medium">
                Exceptional Customer Service
              </h1>
              <p className="text-white">
                Our team is dedicated to providing personalized support,
                ensuring a seamless experience from start to finish
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
