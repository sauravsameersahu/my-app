import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './components/tabs';
import Main from './components/main';
import ExploreMoods from './components/exploreMoods';
import ProductDetails from './components/productDetails';

const Stack = createStackNavigator()

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Explore Moods"
            component={ExploreMoods}
            options={{
              title: "Explore Moods",
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="Product Details"
            component={ProductDetails}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
