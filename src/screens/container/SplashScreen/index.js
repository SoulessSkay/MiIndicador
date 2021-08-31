import React, {useEffect} from 'react';
import SplashScreenTemplate from '../../components/templates/SplashScreen';
import {useNavigation} from '@react-navigation/native';
import {dataActions} from '../../../application/actions/entities/data';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';

const SplashScreenContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const dataResponse = useSelector(store => store.entities.data.data);

  useEffect(() => {
    dispatch(dataActions.getData());
  }, []);

  useEffect(() => {
    if (!!dataResponse && dataResponse.success) {
      setTimeout(function () {
        navigation.navigate('MainStack');
      }, 1000);
    } else if (!!dataResponse && dataResponse.error) {
      Alert.alert(
        'Lo sentimos',
        'No ha sido posible establecer conexión con el servidor',
        [
          {
            text: 'Reintentar',
            onPress: () => dispatch(dataActions.getData()),
            style: 'cancel',
          },
        ],
      );
    }
  }, [dataResponse]);

  return <SplashScreenTemplate />;
};

export default SplashScreenContainer;
