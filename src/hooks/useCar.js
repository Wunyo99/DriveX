import { useParams } from "react-router-dom";
import { cars } from "../data/cars";

export const useCar = () => {
  const { id } = useParams();

  const carInfo = cars.find((items) => items.id === id);
  return {
    carInfo,
    isFound: Boolean(carInfo),
  };
};
