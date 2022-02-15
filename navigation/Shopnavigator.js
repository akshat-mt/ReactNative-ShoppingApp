import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ProductsOverviewScreen from "../Screen/shop/ProductOverviewScreen";
import { Platform } from "react-native";
import CartScreen from "../Screen/shop/CartScreen";
import ProductsDetailsScreen from "../Screen/shop/ProductsDetailsScreen";
import {}
import Colors from "../constants/Colors";
import OrdersScreen from "../Screen/shop/OrderScreen";
const ProductsNavigator = createStackNavigator( {
    productsOverview: ProductsOverviewScreen,
    productDetail : ProductsDetailsScreen,
    Cart : CartScreen
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