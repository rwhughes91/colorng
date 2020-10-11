import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  size: number;
  color: string;
  onPress?: () => void;
}

const EditIcon: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <Feather name="edit" size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

export default React.memo(EditIcon);
