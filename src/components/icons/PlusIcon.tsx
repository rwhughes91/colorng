import { Feather } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const PlusIcon: React.FC<Props> = (props) => {
  return (
    <Feather name="plus" size={props.size} color={props.color} style={{ height: props.size + 3 }} />
  );
};

export default React.memo(PlusIcon);
