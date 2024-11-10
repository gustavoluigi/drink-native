import { useEffect, useState } from "react";
import { Drink } from "../types";

export const useDrinkById = (drinkId: string) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [drink, setDrink] = useState<Drink>();
  const fetchDrink = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
      );

      const data = await response.json();
      if (!data.drinks || data.drinks.length === 0) {
        setError("Drink not found, try again!");
        return;
      }

      setDrink(data.drinks[0]);
    } catch (error) {
      setError("Oops! Erro to fetch drink details, try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrink();
  }, []);

  return {
    loading,
    error,
    drink,
  };
};
