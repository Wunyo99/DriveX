import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "Do you offer financing options?",
    content:
      "Yes. We offer flexible financing plans with competitive interest rates through our trusted financial partners. Our team will help you find a payment plan that fits your budget.",
  },
  {
    value: "item-2",
    trigger: "Can I trade in my current vehicle?",
    content:
      "Absolutely. We accept trade-ins and provide a fair market valuation based on your vehicle's condition, mileage, and current market value. Your trade-in value can be applied toward your next purchase.",
  },
  {
    value: "item-3",
    trigger: "Do your vehicles come with a warranty?",
    content:
      "Yes. Many of our vehicles include manufacturer or dealership warranties, and we also offer extended warranty plans for added peace of mind. Warranty details vary depending on the vehicle.",
  },
  {
    value: "item-4",
    trigger: "Can I schedule a test drive before buying?",
    content:
      "Of course. You can book a test drive online or contact our sales team to schedule a convenient time. We'll have the vehicle ready for you when you arrive.",
  },
  {
    value: "item-5",
    trigger: "Do you offer nationwide vehicle delivery?",
    content:
      "Yes. We provide safe and reliable nationwide delivery services, ensuring your vehicle arrives securely at your preferred location with all the necessary documentation.",
  },
];

const FAQs = () => {
  return (
    <section
      className="relative py-24 text-white bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images2.alphacoders.com/479/479385.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90"></div>{" "}
      <div className="relative container z-20 mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mt-4 text-4xl font-semibold">
            Frequently <span className="text-lime-300">Asked</span> Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
            Find answers to the most common questions about financing,
            trade-ins, warranties, delivery, and purchasing your next vehicle.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="mx-auto max-w-4xl space-y-4"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 px-6 transition hover:border-lime-300"
            >
              <AccordionTrigger className="py-6 text-left text-lg  hover:no-underline">
                {item.trigger}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-base leading-7 text-neutral-400">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>{" "}
      </div>
    </section>
  );
};
export default FAQs;
