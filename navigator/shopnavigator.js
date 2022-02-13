import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ProductsOverviewScreen from "../Screen/shop/ProductOverviewScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
const ProductsNavigator = createStackNavigator( {
    productsOverview: ProductsOverviewScreen
} , {
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor : Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor :  Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ProductsNavigator);