import React, {useEffect, useState} from 'react';
import PriceByIndicatorTemplate from '../../components/templates/PriceByIndicator';
import {useDispatch, useSelector} from 'react-redux';
import {dataByTypeActions} from '../../../application/actions/entities/dataByType';

const PriceByIndicatorContainer = ({route}) => {
  const dispatch = useDispatch();
  const {type} = route.params;

  const responseDataByType = useSelector(
    store => store.entities.dataByType.data.data,
  );

  useEffect(() => {
    dispatch(dataByTypeActions.getDataByType({type: type}));
  }, [type]);

  return (
    <PriceByIndicatorTemplate
      title={responseDataByType.nombre}
      serie={responseDataByType.serie}
    />
  );
};

export default PriceByIndicatorContainer;
