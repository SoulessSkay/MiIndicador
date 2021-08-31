import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import styles from './styles';
import ListItem from '../../organism/ListItem';

const HomeScreenTemplate = ({data, onPressElement, onPressDetails}) => {
  return (
    <Layout style={styles.fullCenter}>
      <ListItem {...{data, onPressElement, onPressDetails}} />
    </Layout>
  );
};

export default HomeScreenTemplate;
