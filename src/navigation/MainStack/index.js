import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreenContainer from '../../screens/container/HomeScreen';
import IndicatorDetailsContainer from '../../screens/container/IndicatorDetails';
import PriceByIndicatorContainer from '../../screens/container/PriceByIndicator';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreenContainer}
        options={{
          headerTitle: 'Mi Indicador',
          headerTitleStyle: {alignSelf: 'center'},
          headerShown: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={IndicatorDetailsContainer}
        options={{
          headerTitle: '',
          headerTitleStyle: {alignSelf: 'center'},
          headerShown: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="PriceScreen"
        component={PriceByIndicatorContainer}
        options={{
          headerTitle: '',
          headerTitleStyle: {alignSelf: 'center'},
          headerShown: true,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
