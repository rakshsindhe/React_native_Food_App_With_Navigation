import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FoodCatalogueDetailsScreen from "./src/screens/FoodCatalogueDetailsScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    FoodCatalogueDetails: FoodCatalogueDetailsScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restauranto"
    }
  }
);

export default createAppContainer(navigator);
