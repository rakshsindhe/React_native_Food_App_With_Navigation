import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const FoodCatalogueDetailsScreen = ({ navigation }) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const id = navigation.getParam("id");

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  const getRestaurantDetails = async id => {
    const response = await yelp.get(`/${id}`);
    setRestaurantDetails(response.data);
  };

  return (
    <View>
      {restaurantDetails ? (
        <View style={styles.restaurantDetailsWrapper}>
          <Text style={styles.restaurantTitle}>{restaurantDetails.name}</Text>
          <FlatList
            data={restaurantDetails.photos}
            keyExtractor={item => item}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image source={{ uri: item }} style={styles.recipePic} />
                </View>
              );
            }}
          />
        </View>
      ) : (
        <Text>Fetching data. Please wait!</Text>
      )}
    </View>
  );
};

export default FoodCatalogueDetailsScreen;

const styles = StyleSheet.create({
  restaurantDetailsWrapper: {
    display: "flex",
    alignItems: "center"
  },
  restaurantTitle: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 16
  },
  recipePic: {
    width: 280,
    height: 150,
    borderRadius: 5,
    margin: 16
  }
});
