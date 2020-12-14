import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FoodCatalogue from "../components/FoodCatalogue";
import SearchBox from "../components/SearchBox";
import useRestaurant from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurant();

  const filterRestaurantByPrice = price => {
    return restaurants.filter(restaurant => {
      if (restaurant.price === "$$$") {
        console.log("BIG SPENDER = ", JSON.stringify(restaurant, undefined, 2));
      }
      return restaurant.price === price;
    });
  };

  return (
    <View style={styles.appWrapper}>
      <SearchBox
        query={searchQuery}
        handleOnSearch={setSearchQuery}
        handleOnSubmit={() => searchApi(searchQuery)}
      />
      {errorMessage.length > 0 ? <Text>{errorMessage}</Text> : null}

      <ScrollView
        style={styles.catalogueWrapper}
        showsVerticalScrollIndicator={false}
      >
        <FoodCatalogue
          title={"Cost Effective"}
          data={filterRestaurantByPrice("$")}
        />
        <FoodCatalogue
          title={"Bit Pricier"}
          data={filterRestaurantByPrice("$$")}
        />
        <FoodCatalogue
          title={"Big Spender"}
          data={filterRestaurantByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  appWrapper: {
    display: "flex",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  catalogueWrapper: {
    display: "flex",
    flex: 1,
    height: "100%",
    overflow: "scroll"
  }
});
