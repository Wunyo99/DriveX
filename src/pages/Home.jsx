import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Brands from "../components/Brands";
import { ThreeDPhotoCarousel } from "../components/ui/ThreeDCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import FAQs from "../components/FAQs";
import CarCard from "../components/CarCard";
import { allCars } from "../data/cars";
const Home = () => {
  return (
    <>
      <Hero />

      <section>
        <div className="bg-green-950">
          <Brands />
        </div>
      </section>

      <section className="px-10 py-10">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl max-w-sm text-center md:text-start text-white font-medium"
          >
            Find and Book Your{" "}
            <span className="text-lime-300">Perfect Ride</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:items-end items-center justify-end"
          >
            <p className="lg:w-100 text-center lg:text-end text-white">
              Experience performance, comfort, and cutting-edge technology in a
              vehicle designed to deliver confidence on every drive.
            </p>
            <Link
              to="/cars"
              className="flex items-center gap-2 border rounded-full p-2 mt-5"
            >
              <span className="text-white uppercase text-sm">
                View all vehicles
              </span>
              <ArrowUpRight size={18} className="text-lime-400" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 py-5 lg:grid-cols-3 px- gap-7"
        >
          {allCars.slice(0, 3).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </motion.div>
      </section>

      <section className="py-10">
        <div>
          <h1 className="text-4xl text-green-800 font-bold text-center">
            Trending <span className="text-lime-300">Cars</span>
          </h1>
        </div>
        <ThreeDPhotoCarousel />
      </section>

      <WhyChooseUs />
      <section className="flex flex-col items-center justify-center py-20 px-10">
        <Testimonials />
      </section>
      <FAQs />
    </>
  );
};

export default Home;
