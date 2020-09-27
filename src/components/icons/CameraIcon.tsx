import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const CameraIcon: React.FC<Props> = (props) => {
  return <FontAwesome name="camera" size={props.size} color={props.color} />;
};

export default React.memo(CameraIcon);
