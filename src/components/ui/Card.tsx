import CardButton from '@components/ui/buttons/CardButton';
import Text from '@components/ui/text/Text';
import { Colors, Typography, Globals, Spacing } from '@styles/index';
import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { verticalScale, moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  header: string;
  svg: React.ReactNode;
  description: string;
  buttonText?: string;
  svgStyles?: StyleProp<ViewStyle>;
}

const Card: React.FC<Props> = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text color={Colors.PINK} styles={styles.textStyles} size={Typography.FONT_SIZE_18}>
          {props.header}
        </Text>
        <Text color={Colors.GRAY}>{props.description}</Text>
      </View>
      <View style={[styles.svgContainer, props.svgStyles]}>{props.svg}</View>
      <View style={styles.buttonContainer}>
        <CardButton>{props.buttonText || 'More'}</CardButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: Globals.BORDER_RADIUS,
    ...Globals.BOX_SHADOW,
  },
  textContainer: {
    width: '100%',
    paddingTop: Spacing.SCALE_12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyles: {
    paddingBottom: Spacing.SCALE_8,
  },
  svgContainer: {
    width: '90%',
    height: verticalScale(250),
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: moderateVerticalScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: Colors.LIGHT_GRAY,
    borderTopWidth: 1,
  },
});

export default React.memo(Card);
