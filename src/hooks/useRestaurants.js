import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("chicken");
  }, []);

  const searchApi = async searchQuery => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchQuery,
          location: "san jose"
        }
      });

      setRestaurants(response.data.businesses);
    } catch (error) {
      console.log("Something went wrong! - Error = ", error);
      setErrorMessage("Something went wrong!");
    }
  };

  return [searchApi, restaurants, errorMessage];
};
