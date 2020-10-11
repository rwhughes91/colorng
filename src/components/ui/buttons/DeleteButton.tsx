import DeleteIcon from '@components/icons/DeleteIcon';
import { Globals, Colors } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  size: number;
  iconSize: number;
  onPress?: () => void;
}

const DeleteButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={Globals.ACTIVE_OPACITY}
      style={[styles.button, { height: props.size, borderRadius: props.size / 2 }]}
      onPress={props.onPress}
    >
      <View>
        <DeleteIcon size={props.iconSize} color={Colors.PINK} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 1,
  },
});

export default React.memo(DeleteButton);
