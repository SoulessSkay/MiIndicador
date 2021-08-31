import React from 'react';
import moment from 'moment';
import {Layout, Text} from '@ui-kitten/components';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import styles from './styles';

const IndicatorDetailsTemplate = ({data, chartData, chartConfig, loading}) => {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

  return (
    <Layout style={styles.container}>
      {loading ? (
        <Text>Cargando</Text>
      ) : (
        <Layout style={styles.container}>
          <Text category={'h5'} style={styles.textAlignCenter}>
            {data.nombre}
          </Text>
          <Layout style={styles.contentInfo}>
            <Layout style={styles.rowDirection}>
              <Text category={'s1'}>Nombre</Text>
              <Text category={'p1'}>{data.nombre}</Text>
            </Layout>
            <Layout style={styles.rowDirection}>
              <Text category={'s1'}>Fecha</Text>
              <Text category={'p1'}>
                {moment(data.serie[0].fecha).format('l')}
              </Text>
            </Layout>
            <Layout style={styles.rowDirection}>
              <Text category={'s1'}>Unidad de medida</Text>
              <Text category={'p1'}>{data.unidad_medida}</Text>
            </Layout>
          </Layout>
          <Layout>
            <LineChart
              data={chartData}
              width={screenWidth}
              height={screenHeight * 0.4}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
          </Layout>
        </Layout>
      )}
    </Layout>
  );
};

export default IndicatorDetailsTemplate;
