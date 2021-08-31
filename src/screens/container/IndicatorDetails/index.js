import React, {useEffect, useState} from 'react';
import IndicatorDetailsTemplate from '../../components/templates/IndicatorDetails';
import {useDispatch, useSelector} from 'react-redux';
import {dataByTypeActions} from '../../../application/actions/entities/dataByType';
import moment from 'moment';

const IndicatorDetailsContainer = ({route}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {type} = route.params;

  useEffect(() => {
    dispatch(dataByTypeActions.getDataByType({type: type}));
  }, [type]);

  const responseDataByType = useSelector(
    store => store.entities.dataByType.data.data,
  );

  const [chartData, setCharData] = useState({
    labels: ['0'],
    datasets: [
      {
        data: [0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  });

  useEffect(() => {
    if (!!responseDataByType && responseDataByType.serie) {
      let labels = responseDataByType.serie.map(({fecha}) =>
        moment(fecha).format('l'),
      );
      let datasets = responseDataByType.serie.map(({valor}) => valor);
      setCharData({
        labels: labels.splice(0, 10),
        datasets: [
          {
            data: datasets.splice(0, 10),
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2, // optional
          },
        ],
      });
    }
  }, [responseDataByType]);

  useEffect(() => {
    if (chartData.labels.length === 10) {
      setLoading(false);
    }
  }, [chartData]);

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <IndicatorDetailsTemplate
      data={responseDataByType}
      chartConfig={chartConfig}
      chartData={chartData}
      loading={loading}
    />
  );
};

export default IndicatorDetailsContainer;
