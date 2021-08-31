import React from 'react';
import {Card, Layout, Text} from '@ui-kitten/components';
import styles from './styles';
import InfoButton from '../../atoms/ButtonInfo';
import Chevron from '../../../../assets/svg/right-thin-chevron-svgrepo-com.svg';

const Item = ({info, onPressElement, onPressDetails}) => {
  return (
    <Card onPress={() => onPressElement(info.item.key)}>
      <Layout style={[styles.item, styles.elementTransparent]}>
        <Layout style={styles.elementTransparent}>
          <Text category={'label'}>{info.item.value.nombre}</Text>
          <Text category={'label'} style={styles.lightBlue}>
            {info.item.value.unidad_medida}
          </Text>
        </Layout>
        <Layout
          style={[styles.elementTransparent, styles.svgCenter, styles.row]}>
          <InfoButton onPress={() => onPressDetails(info.item.key)} />
          <Chevron height={20} width={20} />
        </Layout>
      </Layout>
    </Card>
  );
};

export default Item;
