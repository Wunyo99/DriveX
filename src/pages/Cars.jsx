import { cars } from "../data/cars";
import CarCard from "../components/CarCard";

const Cars = () => {
  return (
    <section className="px-2 mx-auto py-16 shadow-2xl">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </section>
  );
};

export default Cars;