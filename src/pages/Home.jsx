import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Brands from "../components/Brands";
import { ThreeDPhotoCarousel } from "../components/ui/ThreeDCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import FAQs from "../components/FAQs";
const Home = () => {
  const carTypes = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwu1Krkqh8KAYNSeVOH25_0WmuXCVNVeHw1LXxVx3qg&s=10",
      type: "Economy",
      brand: "Toyota Yaris or similar",
      price: "$220.99",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0IMgYUPxbMm8vWw2P4c4Fysphet-bEo2PaOZlVVUOA&s=10",
      type: "Electric",
      brand: "BYD / Tesla",
      price: "$300.99",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kaZf0sG5tYubWrgzLwSXbwzYV9gpZIe6BKBT9Wj8sQ&s=10",
      type: "Luxury",
      brand: "Mercedes C-Class or similar",
      price: "$500.99",
    },
  ];
  return (
    <>
      <Hero />

      <section>
        {/* <h1 className="text-center text-4xl mb-5 text-white font-bold">
          Trusted <span className="text-lime-300">Brands</span>
        </h1> */}
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
            <Link to="/cars" className="flex items-center gap-2 border rounded-full p-2 mt-5">
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
          {carTypes.map((carType, index) => (
            <div key={index} className="borde rounded-4xl overflow-hidden">
              <div className="w-full h- overflow-hidden">
                <img
                  src={carType.img}
                  alt={carType.brand}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center p-7 bg-white">
                <div className="space-y-0.5">
                  <h4 className="font-bold text-2xl">{carType.type}</h4>
                  <p className="text-gray-500 font-medium">{carType.brand}</p>
                  <p className="text-gray-500">
                    <span className="font-bold text-black text-xl">
                      {carType.price}
                    </span>
                    /day
                  </p>
                </div>
                <Link to="/" className="bg-lime-500 p-2 rounded-full">
                  {" "}
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
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
