import ArrowIcon from '@components/icons/ArrowIcon';
import { Colors, Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  size: number;
  iconSize: number;
}

const ForwardButton: React.FC<Props> = (props) => {
  return (
    <View style={[styles.button, { height: props.size, borderRadius: props.size / 2 }]}>
      <View style={{ top: 1 }}>
        <ArrowIcon size={props.iconSize} color={Colors.PINK} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: Globals.MAX_COLOR_SIZE,
    maxWidth: Globals.MAX_COLOR_SIZE,
  },
});

export default React.memo(ForwardButton);
