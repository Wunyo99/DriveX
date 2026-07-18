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
    <section className="py-24 bg-blac">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
            What We Offer
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            <span className="text-green-900">Premium</span> Automotive{" "}
            <span className="text-lime-300">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white">
            From finding your dream car to financing, delivery, and after-sales
            support, DriveX provides everything you need in one place.
          </p>
        </motion.div>

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
  );
};

export default Services;
