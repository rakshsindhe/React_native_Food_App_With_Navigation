import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const RestaturantDetails = ({ restaurant }) => {
  const {
    id = "",
    image_url = "",
    name = "",
    review_count = 0,
    rating = 0
  } = restaurant;
  return (
    <View key={id} style={styles.catalogueItem}>
      <View>
        <Image
          source={{ uri: image_url }}
          style={{ width: 270, height: 200, borderRadius: 4 }}
        ></Image>
      </View>
      <View>
        <Text style={styles.restaurantName}>{name}</Text>
      </View>

      <View>
        <Text
          style={styles.restaurantDetails}
        >{`${rating} Stars, ${review_count} Reviews`}</Text>
      </View>
    </View>
  );
};

export default RestaturantDetails;

const styles = StyleSheet.create({
  catalogueItem: {
    marginRight: 30
  },
  restaurantName: {
    paddingVertical: 4,
    fontSize: 18,
    fontWeight: "bold"
  },
  restaurantDetails: {
    fontSize: 15,
    color: "gray",
    marginBottom: 8
  }
});
