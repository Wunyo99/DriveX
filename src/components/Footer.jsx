import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { CarFront } from "lucide-react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

export function Footer({ className, ...props }) {
  return (
    <footer
      className={cn("relative h-180 w-full bg-black", className)}
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
      {...props}
    >
      <div className="fixed bottom-0 h-180 w-full">
        <div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
          <div className="relative flex min-h-full flex-col justify-end gap-10 border-t px-4 py-8 md:px-12">
            <div
              aria-hidden
              className="absolute inset-0 isolate z-0 contain-strict"
            >
              <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />

              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />

              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
            </div>
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
              {" "}
              <AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
                <div className="flex items-center gap-2">
                  {/* <CarFront className="size-8 text-lime-300" /> */}
                  <div className="rounded-full overflow-hidden w-14 h-14 flex items-center justify-center p-">
                    {" "}
                    <img src={logo} alt="" className="w-15 h-13.5 rounded-full " />
                  </div>{" "}
                  <h4 className="text-4xl text-green-900 font-semibold">
                    Drive<span className="text-lime-300">X</span>
                  </h4>
                </div>

                <p className="text-gray-400 mt-8 text-sm md:mt-0">
                  {" "}
                  DriveX brings you premium luxury, sports, and exotic vehicles.
                  Experience performance, elegance, and automotive excellence.
                </p>

                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.title}
                      size="icon"
                      variant="default"
                      className="size-8"
                    >
                      <link.icon className="size-4 text-lime-300" />
                    </Button>
                  ))}
                </div>
              </AnimatedContainer>
              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer
                  key={group.label}
                  delay={0.1 + index * 0.1}
                  className="w-full"
                >
                  <div className="mb-10 md:mb-0">
                    <h3 className="text-sm uppercase text-lime-300">
                      {group.label}
                    </h3>

                    <ul className="text-gray-400 mt-4 space-y-2 text-sm md:text-sm">
                      {" "}
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="hover:text-white inline-flex items-center transition-all duration-300"
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
            <div className="text-gray-400 flex flex-col items-center justify-between gap-2 border-t pt-6 text-sm md:flex-row">
              {" "}
              <p>© 2025 DriveX. All rights reserved.</p>
              <p>Luxury Automotive</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    title: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    title: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    title: "Youtube",
    href: "#",
    icon: FaYoutube,
  },
  {
    title: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
];

const footerLinkGroups = [
  {
    label: "Cars",
    links: [
      { title: "Luxury Cars", href: "#" },
      { title: "Sports Cars", href: "#" },
      { title: "Supercars", href: "#" },
      { title: "SUVs", href: "#" },
      { title: "Electric Cars", href: "#" },
    ],
  },

  {
    label: "Services",
    links: [
      { title: "Car Financing", href: "#" },
      { title: "Vehicle Inspection", href: "#" },
      { title: "Trade-In", href: "#" },
      { title: "Car Delivery", href: "#" },
      { title: "Maintenance", href: "#" },
    ],
  },

  {
    label: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Car Reviews", href: "#" },
      { title: "Buying Guide", href: "#" },
      { title: "FAQs", href: "#" },
    ],
  },

  {
    label: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Contact", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms", href: "#" },
    ],
  },
];

function AnimatedContainer({ delay = 0.1, children, ...props }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{
        filter: "blur(4px)",
        translateY: -8,
        opacity: 0,
      }}
      whileInView={{
        filter: "blur(0px)",
        translateY: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.8,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
