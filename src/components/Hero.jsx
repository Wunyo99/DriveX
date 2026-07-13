import { ArrowUpRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      {/* <section className="h-screen flex items-cente justify-center md:justify-start overflow-hidden" > */}
      <section className="h-screen flex items-cente md:block justify-center ">
        <div
          className="absolute inset-0 bg-cover lg:bg-center bg-no-repeat"
          style={{
            backgroundImage: `
                          linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                    url('https://images.openai.com/static-rsc-4/M1Eo0yoaQv1LqfsbxAUAduOkmiNSBUj_jJcza2aSpHqpDWXD5dP5zbM2-422NbGhdPwZmhv5Sx5_11sl21hmV5frMAWv1fq9kUhIEk51n5fmIgZk-g_Gd_1QlHOeD1eR-hwYmi2J-h8eL0_ffVf_XvIi5Yt4VTATFq06r1GoUZw?purpose=inline')`,
          }}
        />

        <div className="relative px-6 md:px-15 text-center md:text-start space-y-10 z-10">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center hero-title text-3xl md:text-7xl text-white font-bold tracking-wider mt-4"
          >
            <span className="text-green-900">DRIVE</span> YOUR{" "}
            <span className="text-lime-300">WAY</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 lg:mt-82 max-w-lg"
          >
            <p className="text-white/90 font-medium text-xl">
              EXPLORE. BOOK. DRIVE
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
              <Link
                to="/jobs"
                className="flex items-center gap-2 text-black bg-lime-300 py-2 px-6 rounded-full font-medium hover:bg-yellow-200 duration-300"
              >
                <span>EXPLORE CARS</span>
                <div className="bg-black p-1 rounded-full">
                  {" "}
                  <ArrowUpRight className="text-lime-400" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
