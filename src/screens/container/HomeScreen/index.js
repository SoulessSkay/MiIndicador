import React, {useEffect, useState} from 'react';
import HomeScreenTemplate from '../../components/templates/HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const HomeScreenContainer = () => {
  const dataResponse = useSelector(store => store.entities.data.data.data);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [processedData, setProcessedData] = useState([]);

  function pressElement(type) {
    console.log(type);
    navigation.navigate('PriceScreen', {type: type});
  }

  function pressDetails(type) {
    console.log(type);
    navigation.navigate('DetailsScreen', {type: type});
  }

  useEffect(() => {
    Object.entries(dataResponse).forEach(([key, value]) => {
      if (typeof value === 'object') {
        setProcessedData(prevData => [...prevData, {key, value}]);
      }
    });
  }, [dataResponse]);

  return (
    <HomeScreenTemplate
      {...{
        data: processedData,
        onPressElement: pressElement,
        onPressDetails: pressDetails,
      }}
    />
  );
};

export default HomeScreenContainer;
