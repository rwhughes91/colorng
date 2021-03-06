import PlusIcon from '@components/icons/PlusIcon';
import { Colors, Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  size: number;
  iconSize: number;
  onPress?: () => void;
}

const AddButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { height: props.size, borderRadius: props.size / 2 }]}
      activeOpacity={Globals.ACTIVE_OPACITY}
      onPress={props.onPress}
    >
      <View style={{ top: 1 }}>
        <PlusIcon size={props.iconSize} color={Colors.PINK} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(AddButton);
