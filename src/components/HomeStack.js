import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loggin from '../screens/Loggin';
import Menu from '../screens/Menu';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const HomeStack =() => {
    return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="loggin" component={Loggin} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
export default HomeStack;