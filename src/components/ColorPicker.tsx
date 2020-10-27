import Text from '@components/ui/text/Text';
import { Globals, Colors } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ColorPicker as ColorPickerWheel } from 'react-native-color-picker';

interface Props {
  onPress: (x: string) => void;
}

const ColorPicker: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text color={Colors.PINK} styles={{ alignSelf: 'flex-start' }}>
        Choose a color by pressing the wheel!
      </Text>
      <ColorPickerWheel
        style={styles.picker}
        onColorSelected={props.onPress}
        defaultColor={Colors.ORANGE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  picker: {
    flex: 1,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH_THIN,
    alignSelf: 'center',
    maxHeight: Globals.MAX_CONTENT_WIDTH_THIN,
  },
});

export default React.memo(ColorPicker);
