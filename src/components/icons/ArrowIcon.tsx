import { AntDesign } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const ArrowIcon: React.FC<Props> = (props) => {
  return <AntDesign name="arrowright" size={props.size} color={props.color} />;
};

export default React.memo(ArrowIcon);
