import CardButton from '@components/ui/buttons/CardButton';
import Text from '@components/ui/text/Text';
import { Colors, Typography, Globals, Spacing } from '@styles/index';
import { Navigation } from '@typeDefs/index';
import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  header: string;
  body: React.ReactNode;
  description: string;
  navigation: Navigation;
  buttonText?: string;
  bodyStyles?: StyleProp<ViewStyle>;
  noBorder?: boolean;
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
      <View style={[styles.bodyContainer, props.bodyStyles]}>{props.body}</View>
      <View
        style={[
          styles.buttonContainer,
          {
            borderTopColor: Colors.LIGHT_GRAY,
            borderTopWidth: props.noBorder ? 0 : 1,
          },
        ]}
      >
        <CardButton navigation={props.navigation}>{props.buttonText || 'More'}</CardButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Globals.BORDER_RADIUS,
    ...Globals.BOX_SHADOW,
  },
  textContainer: {
    width: '100%',
    paddingTop: Spacing.SCALE_12,
    alignItems: 'center',
  },
  textStyles: {
    paddingBottom: 5,
  },
  bodyContainer: {
    flex: 1,
    width: '90%',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(16),
  },
});

export default React.memo(Card);
