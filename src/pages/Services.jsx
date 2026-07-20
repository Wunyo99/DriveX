import {
  Car,
  CreditCard,
  Repeat,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Premium Vehicle Sales",
      description:
        "Browse a carefully selected inventory of luxury, sports, and everyday vehicles from trusted manufacturers.",
    },
    {
      icon: CreditCard,
      title: "Flexible Financing",
      description:
        "Choose from multiple financing plans tailored to your budget with competitive interest rates.",
    },
    {
      icon: Repeat,
      title: "Trade-In Program",
      description:
        "Exchange your current vehicle for a better one and receive a fair market valuation.",
    },
    {
      icon: ShieldCheck,
      title: "Extended Warranty",
      description:
        "Drive confidently with warranty plans that protect your investment long after purchase.",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description:
        "Purchase your dream car online and have it delivered safely to your preferred location.",
    },
    {
      icon: Wrench,
      title: "Maintenance Support",
      description:
        "Keep your vehicle performing at its best with professional servicing and routine maintenance.",
    },
  ];
  return (
    <>
      <motion.section
                  initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        className="
          relative
          flex
          min-h-[70vh]
          items-center
          overflow-hidden
          bg-black
        "
      >
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Luxury car"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-50
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-linear-to-r
            from-black
            to-black/30
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            text-white
          "
        >
          <p
            className="
              uppercase
              tracking-[0.4em]
              text-lime-400
            "
          >
            What We Offer
          </p>

          <h1
            className="
              mt-5
              max-w-3xl
              text-5xl
              font-black
              md:text-6xl
            "
          >
            Premium Automotive{" "}
            <span className="text-lime-300">Services</span>
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              text-white/70
            "
          >
              From finding your dream car to financing, delivery, and
              after-sales support, DriveX provides everything you need in one
              place.
          </p>
        </div>
      </motion.section>

      <section className="py-24 bg-blac">
        <div className="container mx-auto px-6">


          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  key={service.title}
                  className="group rounded-3xl hover:border p-8 transition hover:-translate-y-1 hover:border-lime-200"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-950 text-lime-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-lime-300">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-white">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
