import React from 'react';
import {TouchableOpacity} from 'react-native';
import InfoSVG from '../../../../assets/svg/information-button-svgrepo-com.svg';

const InfoButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <InfoSVG height={20} width={20} />
    </TouchableOpacity>
  );
};

export default InfoButton;
