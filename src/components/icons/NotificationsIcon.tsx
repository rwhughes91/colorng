import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const NotificationsIcon: React.FC<Props> = (props) => {
  return <Ionicons name="ios-notifications-outline" size={props.size} color={props.color} />;
};

export default React.memo(NotificationsIcon);
