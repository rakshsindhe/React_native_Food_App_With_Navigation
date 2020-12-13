import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBox from "../components/SearchBox";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.appWrapper}>
      <SearchBox
        query={searchQuery}
        handleOnSearch={q => setSearchQuery(q)}
        handleOnSubmit={() => console.log("Submitted the Form")}
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
