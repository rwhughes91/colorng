import { Feather } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const DeleteIcon: React.FC<Props> = (props) => {
  return <Feather name="x" size={props.size} color={props.color} />;
};

export default React.memo(DeleteIcon);
