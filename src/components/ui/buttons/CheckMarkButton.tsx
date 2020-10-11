import CheckMarkIcon from '@components/icons/CheckMarkIcon';
import { Colors, Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  size: number;
  iconSize: number;
  selected?: boolean;
  onPress?: (x: any) => void;
}

const CheckMarkButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={Globals.ACTIVE_OPACITY}
      onPress={props.onPress}
      style={{ paddingHorizontal: 5, paddingVertical: 5 }}
    >
      <View style={[styles.button, { height: props.size, borderRadius: props.size / 2 }]}>
        {props.selected && (
          <View style={{ top: 1 }}>
            <CheckMarkIcon size={props.iconSize} color="green" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
  },
});

export default React.memo(CheckMarkButton);
