import Text from '@components/ui/text/HeaderText';
import { Globals, Typography } from '@styles/index';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  size: number;
  onPress?: (...x: any) => void;
}

const SaveButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { height: props.size, borderRadius: props.size / 2 }]}
      activeOpacity={Globals.ACTIVE_OPACITY}
      onPress={props.onPress}
    >
      <View style={{ top: 1 }}>
        <Text color="white" size={Typography.FONT_SIZE_16}>
          Save
        </Text>
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

export default React.memo(SaveButton);
