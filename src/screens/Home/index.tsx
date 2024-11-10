import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { AppRoutesParamList } from "../../routers";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useDrinks } from "../../hooks/useDrinks";

type HomeProps = {
  navigation: NavigationProp<AppRoutesParamList>;
};

export const Home = ({ navigation }: HomeProps) => {
  const [searchText, setSearchText] = useState("");

  const { fetchDrinks, drinks, error, clear } = useDrinks(searchText);

  const clearInput = () => {
    setSearchText("");
    clear();
  };

  const handleItemClick = (idDrink: string) => {
    navigation.navigate("Details", { idDrink });
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Input your drink name"
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <Pressable onPress={clearInput} style={styles.clearButton}>
            <Ionicons name="close-outline" size={32} />
          </Pressable>
        )}
        <Pressable onPress={fetchDrinks}>
          <Ionicons name="search" size={24} />
        </Pressable>
      </View>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <FlatList
        data={drinks}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.drinkItemContainer}
            onPress={() => handleItemClick(item.idDrink)}
          >
            <Image
              source={{ uri: item.strDrinkThumb }}
              style={styles.drinkThumb}
            />
            <View>
              <Text>{item.strDrink}</Text>
              <Text>
                {item.strAlcoholic === "Alcoholic"
                  ? "Alcoholic"
                  : "Non-Alcoholic"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
