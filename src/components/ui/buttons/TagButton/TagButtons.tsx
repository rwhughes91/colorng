import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

import ColorButton from './TagButton';

interface Props {
  buttons: string[];
  onPress: (title: string) => void;
}

const ColorButtons: React.FC<Props> = (props) => {
  return (
    <View style={styles.buttonContainer}>
      {props.buttons.map((button, i) => (
        <ColorButton key={i} title={button} onPress={() => props.onPress(button)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: moderateScale(3, 0.2),
    marginTop: moderateVerticalScale(3, 0.2),
  },
});

export default React.memo(ColorButtons);
