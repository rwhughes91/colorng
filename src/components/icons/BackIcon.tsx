import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const BackIcon: React.FC<Props> = (props) => {
  return <Ionicons name="md-arrow-back" size={props.size} color={props.color} />;
};

export default React.memo(BackIcon);
