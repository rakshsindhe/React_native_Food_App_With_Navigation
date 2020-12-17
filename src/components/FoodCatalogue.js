import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import RestaturantDetails from "./RestaturantDetails";
import { withNavigation } from "react-navigation";

const FoodCatalogue = ({ title, data, navigation }) => {
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
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("FoodCatalogueDetails", {id: item.id})}
              >
                <RestaturantDetails restaurant={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default withNavigation(FoodCatalogue);

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
