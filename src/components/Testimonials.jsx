import CircularTestimonials from "./ui/CircularTestimonials";
import { motion } from "framer-motion";
const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "DriveX made the entire car buying process effortless. Their attention to detail and selection of luxury vehicles exceeded my expectations.",
      name: "John Smith",
      designation: "Lamborghini Huracán Owner",
      src: "https://t3.ftcdn.net/jpg/02/70/80/44/240_F_270804457_0IK5O61qgIWAYUXIYWeBBaSFaKngjysa.jpg",
    },
    {
      quote:
        "From the first consultation to delivery, the experience was exceptional. I finally found a dealership that understands true luxury.",
      name: "Sarah Johnson",
      designation: "Porsche 911 Owner",
      src: "https://t3.ftcdn.net/jpg/05/95/79/82/240_F_595798285_4H8Xzgbq7vmSShgi82Z2AeUg71wsLNSA.jpg",
    },
    {
      quote:
        "Amazing service, incredible vehicles, and a team that genuinely cares. DriveX made owning my dream car a reality.",
      name: "Michael Brown",
      designation: "Mercedes AMG GT Owner",
      src: "https://t3.ftcdn.net/jpg/02/83/12/98/240_F_283129831_MTTjxBv6zrcSREEsmLgvLQJFU0HyW2ui.jpg",
    },
  ];
  return (
    <>
      <motion.div
                initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
      className="mb-8">
        <h1 className="capitalize text-center text-4xl font-semibold text-white">
          What our <span className="text-lime-300">customers</span> say
        </h1>
      </motion.div>
      <CircularTestimonials
        testimonials={testimonials}
        colors={{
          name: "#fff",
          designation: "#bbf451",
          testimony: "#d1d5db",
          arrowBackground: "#111827",
          arrowForeground: "#ffffff",
          arrowHoverBackground: "#22c55e",
        }}
      />
    </>
  );
};

export default Testimonials;
