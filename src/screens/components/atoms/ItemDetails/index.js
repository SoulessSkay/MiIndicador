import React from 'react';
import {Card, Layout, Text} from '@ui-kitten/components';
import styles from './styles';
import moment from 'moment';

const ItemDetails = ({info}) => {
  return (
    <Card>
      <Layout style={[styles.item, styles.elementTransparent]}>
        <Text category={'label'}>{moment(info.item.fecha).format('l')}</Text>
        <Text category={'label'} style={styles.lightBlue}>
          ${info.item.valor}
        </Text>
      </Layout>
    </Card>
  );
};

export default ItemDetails;
