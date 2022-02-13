import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore , combineReducers} from 'redux';
import { Provider } from "react-redux"

import ProductsReducer from "./store/reducers/prodcuts";
import Shopnavigator from './navigator/shopnavigator';
const rootReducer = combineReducers({
  products: ProductsReducer
});

const store = createStore(rootReducer);
export default function App() {
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
