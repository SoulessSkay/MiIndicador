import React from 'react';
import styles from './styles';
import {List} from '@ui-kitten/components';
import Item from '../../molecules/Item';

const ListItem = ({data, onPressElement, onPressDetails}) => {
  const renderItem = info => {
    return (
      <Item
        info={info}
        onPressElement={onPressElement}
        onPressDetails={onPressDetails}
      />
    );
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

export default ListItem;
