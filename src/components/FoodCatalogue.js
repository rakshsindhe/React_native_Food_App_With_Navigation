import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import RestaturantDetails from "./RestaturantDetails";

const FoodCatalogue = ({ title, data }) => {
  return (
    <View style={styles.catalogue}>
      <View style={styles.catalogueTitleSection}>
        <Text style={styles.catalogueTitle}>{title}</Text>
      </View>
      <View style={styles.catalogueItemContainer}>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={restaurant => restaurant.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <RestaturantDetails restaurant={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default FoodCatalogue;

const styles = StyleSheet.create({
  catalogue: {
    display: "flex",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 16
  },
  catalogueTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  catalogueItemContainer: {
    display: "flex",
    flexDirection: "row"
  }
});
