import React from 'react';
import {Layout, ListItem, Text} from '@ui-kitten/components';
import styles from './styles';
import ListItemDetails from '../../organism/ListItemDetails';

const PriceByIndicatorTemplate = ({title = '', serie = []}) => {
  return (
    <Layout style={styles.container}>
      <Text category={'h5'} style={styles.textAlignCenter}>
        {title}
      </Text>
      <ListItemDetails data={serie} />
    </Layout>
  );
};

export default PriceByIndicatorTemplate;
