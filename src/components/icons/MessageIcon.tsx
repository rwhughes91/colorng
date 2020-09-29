import { AntDesign } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const MessageIcon: React.FC<Props> = (props) => {
  return <AntDesign name="message1" size={props.size} color={props.color} />;
};

export default React.memo(MessageIcon);
