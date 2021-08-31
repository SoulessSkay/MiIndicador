import React from 'react';

import MainStack from '../MainStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreenContainer from '../../screens/container/SplashScreen';

const Stack = createNativeStackNavigator();

const SplashStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreenContainer}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainStack"
        component={MainStack}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SplashStack;
