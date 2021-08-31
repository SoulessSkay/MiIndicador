import React from 'react';
import type {Node} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, ReactReduxContext} from 'react-redux';
import SplashStack from './src/navigation/SplashStack';
import store from './src/application/config';

const App: () => Node = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store} context={ReactReduxContext}>
        <ApplicationProvider {...eva} theme={eva.dark}>
          <NavigationContainer>
            <SplashStack />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    </>
  );
};

export default App;
