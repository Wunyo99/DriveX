import { allCars } from "../data/cars";
import CarCard from "../components/CarCard";
import { Search, ChevronDown } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";

const categories = ["All", "Petrol", "Diesel", "Electric", "Hybrid"];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Min - Max", value: "price-asc" },
  { label: "Price: Max - Min", value: "price-desc" },
];

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("search") || "";
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [sortBy, setSortBy] = useState("featured");

  const filteredCars = useMemo(() => {
    let filtered = [...allCars];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.brand.toLowerCase().includes(query) ||
          c.fuel.toLowerCase().includes(query),
      );
    }

    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter((car) => car.fuel === selectedCategory);
    }

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "featured":
        filtered = filtered
          .filter((car) => car.featured)
          .concat(filtered.filter((car) => !car.featured));
        break;
      default:
        break;
    }
    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);
  return (
    <section className="px-2 mx-auto py-10 shadow-2xl">
      <div className="flex items-center flex-wrap justify-between md:px-2">
        <div className="relative mb-2">
          <Search
            className="absolute top-4 inset-s-3 text-lime-300"
            size={18}
          />
          <input
            className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-full py-3 pl-10  md:w-120"
            value={searchQuery}
            onChange={(e) => {
              const params = new URLSearchParams(searchParams);

              if (e.target.value) {
                params.set("search", e.target.value);
              } else {
                params.delete("search");
              }

              setSearchParams(params);
            }}
            type="text"
            placeholder="Search for cars..."
          />
        </div>

        <p className="text-lime-300">Results: {filteredCars.length}</p>

        <div className="relative group">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 text-lime-300"
          >
            <span className="text-sm">
              Sort by: {sortOptions.find((o) => o.value === sortBy)?.label}
            </span>
            <ChevronDown />
          </button>

          {isSortOpen && (
            <div className="absolute right-0 top-full mt-1 bg-black border border-gray-300 shadow-lg rounded-lg transition-all z-10 md:min-w-50 overflow-hidden">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value);
                    setIsSortOpen(!isSortOpen);
                  }}
                  className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    sortBy === option.value
                      ? "bg-green-950 text-lime-300"
                      : "hover:bg-green-950 text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-6 p-4 gap-2">
        <aside className="hidde md:block p-2 shrink-0 w-56">
          <div className="sticky top-40">
            {/* <h3 className="font-bold mb-2">Category</h3> */}
            <ul className="flex items-cente justify-between gap-5 lg:items-start lg:flex-col">
              {categories.map((category) => {
                const href =
                  category === "All" ? "/cars" : `/cars?category=${category}`;
                return (
                  <li key={category}>
                    <Link
                      to={href}
                      className={`text-sm transition-colors cursor-pointer ${
                        selectedCategory === category
                          ? "text-lime-300 font-semibold"
                          : "text-white hover:text-lime-300"
                      }`}
                    >
                      {category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
        <div className="col-span-5">
          {" "}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
