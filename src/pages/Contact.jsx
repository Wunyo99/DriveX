import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className=" text-zinc-900">
      <section
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
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600"
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
            Contact DriveX
          </p>

          <h1
            className="
              mt-5
              max-w-3xl
              text-5xl
              font-black
              md:text-7xl
            "
          >
            Let's Find Your Perfect Vehicle
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              text-white/70
            "
          >
            Our automotive specialists are ready to answer your questions,
            arrange test drives, and help you find your next car.
          </p>
        </div>
      </section>

      <section
        className="
          mx-auto
          grid
          grid-cols-2
          max-w-6xl
          gap-6
          px-6
          py-20
          md:grid-cols-4
        "
      >
        <ContactCard
          icon={<MapPin />}
          title="Visit Us"
          text=" East Legon Accra, Ghana"
        />

        <ContactCard
          icon={<Phone />}
          title="Call Us"
          text="(+233)245494534"
        />

        <ContactCard icon={<Mail />} title="Email" text="drivex@gmail.com" />

        <ContactCard
          icon={<Clock />}
          title="Opening Hours"
          text="Mon - Sat: 9AM - 7PM"
        />
      </section>

      <section
        className="
          bg-zinc-
          px-6
          py-24
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-12
            lg:grid-cols-2
          "
        >
          <div>
            <p className="uppercase tracking-widest text-lime-300 font-medium">
              Get In Touch
            </p>

            <h2
              className="
                mt-4
                text-5xl
                text-white
                font-medium
              "
            >
              Send Us A Message
            </h2>

            <p
              className="
                mt-6
                text-lg
                text-zinc-600
              "
            >
              Whether you have a question about a vehicle, financing, or booking
              a test drive, our team is ready to help.
            </p>
          </div>

          <form
            className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-zinc-950
    p-8
    shadow-2xl
    md:p-10
  "
          >
            <div
              className="
      absolute
      -right-20
      -top-20
      h-60
      w-60
      rounded-full
      bg-lime-400/10
      blur-3xl
    "
            />

            <div className="relative space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Full Name
                  </label>

                  <input
                    placeholder="John Doe"
                    className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            transition
            placeholder:text-zinc-600
            focus:border-lime-400
            focus:ring-1
            focus:ring-lime-400
          "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Email Address
                  </label>

                  <input
                    placeholder="johndoe@email.com"
                    className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            transition
            placeholder:text-zinc-600
            focus:border-lime-400
            focus:ring-1
            focus:ring-lime-400
          "
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Phone Number
                  </label>

                  <input
                    placeholder="xxx xxx xxx x"
                    className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            transition
            placeholder:text-zinc-600
            focus:border-lime-400
            focus:ring-1
            focus:ring-lime-400
          "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Vehicle Type
                  </label>

                  <select
                    className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            focus:border-lime-400
          "
                  >
                    <option className="bg-zinc-900">Select vehicle</option>

                    <option className="bg-zinc-900">Sports Car</option>

                    <option className="bg-zinc-900">SUV</option>

                    <option className="bg-zinc-900">Luxury Sedan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="I'm interested in..."
                  className="
          w-full
          resize-none
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-white
          outline-none
          transition
          placeholder:text-zinc-600
          focus:border-lime-400
          focus:ring-1
          focus:ring-lime-400
        "
                />
              </div>

              <button
                className="
        group
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        bg-lime-400
        py-4
        font-bold
        text-black
        transition-all
        hover:bg-lime-300
        hover:shadow-lg
        hover:shadow-lime-400/20 cursor-pointer
      "
              >
                Send Message
                <Send
                  size={18}
                  className="
          transition-transform
          group-hover:translate-x-1
        "
                />
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className=" py-16 px-5 bg-green-950 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1 text-center lg:text-start">
            <h1 className=" text-3xl md:text-6xl font-bold text-lime-300">
              Visit Our Showroom
            </h1>
            <p className="text-white mt-4 lg:mt-8">
              Experience every vehicle in person, explore the interior, and book
              a personalized test drive.
            </p>
          </div>
          <div className="col-span-2 flex justify-center">
            <img
              className="rounded-xl w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5r69MqIqXhP3crbqFQlkKlBWnb0KdpTLVFKfnNL3UQ&s=10"
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="
        relative
        mx-auto
        mt-20
        mb-20
        max-w-5xl
        overflow-hidden
        rounded-3xl
        bg-black
        px-6
        py-16
        text-center
        shadow-2xl
        md:px-12"
      >
        <div
          className="
      absolute
      -right-20
      -top-20
      h-60
      w-60
      rounded-full
      bg-lime-400/20
      blur-3xl
    "
        />

        <div
          className="
        absolute
        -bottom-20
        -left-20
        h-60
        w-60
        rounded-full
        bg-lime-400/10
        blur-3xl
    "
        />

        <div className="relative">
          <p
            className="
        text-sm
        uppercase
        tracking-[0.4em]
        text-lime-400
      "
          >
            DriveX Experience
          </p>

          <h2
            className="
        mt-5
        text-4xl
        font-black
        leading-tight
        text-white
        md:text-6xl
      "
          >
            Ready to Find
            <span className="text-lime-300"> Your Next Vehicle?</span>
          </h2>

          <p
            className="
        mx-auto
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-zinc-400
      "
          >
            Whether you're buying your first car or upgrading to your dream
            ride, our specialists are here to help you find the perfect match.
          </p>

          <div
            className="
        mt-10
        flex
        flex-col
        justify-center
        gap-4
        sm:flex-row
      "
          >
            <Link
              to="/cars"
              className="
          rounded-full
          bg-lime-400
          px-8
          py-4
          font-bold
          text-black
          transition
          hover:bg-lime-300
        "
            >
              Browse Vehicles
            </Link>

            <Link
              to="/contact"
              className="
          rounded-full
          border
          border-white/20
          px-8
          py-4
          font-semibold
          text-white
          transition
          hover:bg-white
          hover:text-black
        "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const ContactCard = ({ icon, title, text }) => (
  <div
    className="
      rounded-3xl
      border 
      p-6
      transition
      hover:-translate-y-2
      hover:shadow-lg
    "
  >
    <div className="text-lime-500">{icon}</div>

    <h3 className="mt-5 font-medium text-white">{title}</h3>

    <p className="mt-2 text-sm text-zinc-500">{text}</p>
  </div>
);

const Reason = ({ icon, title, text }) => (
  <div className="text-center">
    <div className="flex justify-center text-lime-500">{icon}</div>

    <h3 className="mt-5 font-bold">{title}</h3>

    <p className="mt-3 text-sm text-zinc-500">{text}</p>
  </div>
);

export default Contact;
