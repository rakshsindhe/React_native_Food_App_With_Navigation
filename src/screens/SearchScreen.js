import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBox from "../components/SearchBox";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 2,
        term: searchQuery,
        location: "san jose"
      }
    });

    console.log(
      "RESPONSE = ",
      JSON.stringify(response.data.businesses, undefined, 2)
    );

    setRestaurants(response.data.businesses);
  };

  return (
    <View style={styles.appWrapper}>
      <SearchBox
        query={searchQuery}
        handleOnSearch={q => setSearchQuery(q)}
        handleOnSubmit={searchApi}
      />
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
  }
});
