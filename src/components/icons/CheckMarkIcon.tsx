import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const CheckMarkIcon: React.FC<Props> = (props) => {
  return <Ionicons name="md-checkmark" size={props.size} color={props.color} />;
};

export default React.memo(CheckMarkIcon);
