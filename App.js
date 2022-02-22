import { StatusBar } from 'expo-status-bar';
import{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore , combineReducers} from 'redux';
import { Provider } from "react-redux";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import cartReducer from './store/reducers/cart'
import * as Font from 'expo-font';
import ProductsReducer from "./store/reducers/prodcuts";
import ordersReducer from "./store/reducers/order"
import Shopnavigator from './navigation/Shopnavigator';
const rootReducer = combineReducers({
  products: ProductsReducer,
  cart : cartReducer,
  orders : ordersReducer
});

const store = createStore(rootReducer);
export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
  });
  
  if (!oswaldLoaded) {
    return null;
  }
  
  if (!latoLoaded) {
    return null;
  }
  

    
   return (
    <Provider store={store}>
       <Shopnavigator />
    </Provider>
  );
   }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
