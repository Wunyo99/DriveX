import { Link } from "react-router-dom";
import { Fuel, Gauge, Settings2, MapPin, Heart } from "lucide-react";

const CarCard = ({ car }) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-zinc-200
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {car.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black">
            Featured
          </span>
        )}

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
          <Heart size={18} />
        </button>

        <div className="absolute bottom-5 left-5 text-white">
          <h2 className="text-2xl font-bold">${car.price.toLocaleString()}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-green-950">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {car.brand}
        </p>

        <h3 className="mt-1 text-xl font-bold text-lime-300">{car.name}</h3>

        <p className="mt-3 line-clamp-2 text-sm text-white">
          {car.description}
        </p>

        {/* Specs */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-lime-300">
          <div className="flex items-center gap-2">
            <Fuel size={16} />
            <span>{car.fuel}</span>
          </div>

          <div className="flex items-center gap-2">
            <Settings2 size={16} />
            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center gap-2">
            <Gauge size={16} />
            <span>{car.mileage.toLocaleString()} mi</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{car.location}</span>
          </div>
        </div>

        <Link
          to={`/cars/${car.id}`}
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-lime-400 hover:text-black"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default CarCard;
