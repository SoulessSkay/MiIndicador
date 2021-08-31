import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import styles from './styles';

const SplashScreenTemplate = () => {
  return (
    <Layout style={styles.fullCenter}>
      <Text category="h1">Bienvenido</Text>
    </Layout>
  );
};

export default SplashScreenTemplate;
