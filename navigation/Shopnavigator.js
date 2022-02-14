import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ProductsOverviewScreen from "../Screen/shop/ProductOverviewScreen";
import { Platform } from "react-native";
import ProductsDetailsScreen from "../Screen/shop/ProductsDetailsScreen";
import Colors from "../constants/Colors";
const ProductsNavigator = createStackNavigator( {
    productsOverview: ProductsOverviewScreen,
    productDetail : ProductsDetailsScreen
} , {
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor : Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTitleStyle : {
            fontFamily: 'Oswald_400Regular'
        },
        headerBackTitle : {
             fontFamily: 'Lato_400Regular'
        },
        headerTintColor :  Platform.OS === 'android' ? 'white' : Colors.primary
    },
    
});

export default createAppContainer(ProductsNavigator);