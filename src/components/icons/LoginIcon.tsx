import { AntDesign } from '@expo/vector-icons';
import { Globals } from '@styles/index';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  size: number;
  color: string;
  onPress: () => void;
}

const LoginIcon: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={Globals.ACTIVE_OPACITY}>
      <AntDesign name="login" size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

export default React.memo(LoginIcon);
