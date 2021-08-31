import React from 'react';
import styles from './styles';
import {List} from '@ui-kitten/components';
import ItemDetails from '../../atoms/ItemDetails';

const ListItemDetails = ({data}) => {
  const renderItem = info => {
    console.log(info);
    return <ItemDetails info={info} />;
  };

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default ListItemDetails;
