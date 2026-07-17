import { useParams } from "react-router-dom";
import { allCars } from "../data/cars";

export const useCar = () => {
  const { id } = useParams();

  const carInfo = allCars.find((items) => items.id === id);
  return {
    carInfo,
    isFound: Boolean(carInfo),
  };
};
