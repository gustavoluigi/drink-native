import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { useDrinkById } from "../../hooks/useDrinkById";
import { styles } from "./styles";

type DetailsScreenRouteProps = RouteProp<
  { Details: { idDrink: string } },
  "Details"
>;

interface DetailsProps {
  route: DetailsScreenRouteProps;
}

export const Details: React.FC<DetailsProps> = ({ route }) => {
  const { drink, error, loading } = useDrinkById(route.params.idDrink);

  if (loading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.indicator}>
        <Text>{error}</Text>
      </View>
    );
  }

  const ingredients = Array.from({ length: 15 }, (_, index) => ({
    ingredient: drink?.[`strIngredient${index + 1}`] || "",
    measure: drink?.[`strMeasure${index + 1}`] || "to taste",
  })).filter((item) => item.ingredient);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: drink?.strDrinkThumb }}
        style={styles.headerImage}
      />
      <Text style={styles.drinkName}>{drink?.strDrink}</Text>
      <Text style={styles.category}>
        {drink?.strCategory} = {drink?.strAlcoholic}
      </Text>
      <Text style={styles.glass}>Served on = {drink?.strGlass}</Text>
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      {ingredients.map(({ ingredient, measure }, index) => (
        <Text key={index} style={styles.ingredientItem}>
          {ingredient} = {measure}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Instructions:</Text>
      <Text style={styles.instructions}>{drink?.strInstructions}</Text>
    </ScrollView>
  );
};
