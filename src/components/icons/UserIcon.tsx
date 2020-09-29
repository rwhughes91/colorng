import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const UserIcon: React.FC<Props> = (props) => {
  return <FontAwesome name="user-o" size={props.size} color={props.color} />;
};

export default React.memo(UserIcon);
