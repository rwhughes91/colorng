import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';

interface Props {
  size: number;
  color: string;
}

const SettingsIcon: React.FC<Props> = (props) => {
  return <SimpleLineIcons name="settings" size={props.size} color={props.color} />;
};

export default React.memo(SettingsIcon);
