import { AntDesign } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const StarIcon: React.FC<Props> = (props) => {
  return <AntDesign name="star" size={props.size} color={props.color} />;
};

export default React.memo(StarIcon);
