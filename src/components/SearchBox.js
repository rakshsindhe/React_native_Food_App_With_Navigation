import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBox = ({ query, handleOnSearch, handleOnSubmit }) => {
  return (
    <View>
      <Feather
        name="search"
        size={30}
        color="black"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={"Search your favourite restaurant"}
        autoCorrect={false}
        autoCapitalize="none"
        value={query}
        onChangeText={handleOnSearch}
        onEndEditing={handleOnSubmit}
      ></TextInput>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    top: 10,
    left: 7
  },
  input: {
    paddingVertical: 12,
    paddingRight: 12,
    paddingLeft: 45,
    fontSize: 18,
    borderWidth: 1,
    backgroundColor: "#D9D9D9",
    // backgroundColor: "#F0EEEE",
    borderColor: "#D9D9D9",
    borderRadius: 5,
    color: "#2b3a42",
    height: 50,
    position: "relative",
    marginBottom: 16
  }
});
