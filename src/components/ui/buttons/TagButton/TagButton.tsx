import Text from '@components/ui/text/Text';
import { Colors, Globals, Typography } from '@styles/index';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  title: string;
}

const TagButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={Globals.ACTIVE_OPACITY}>
      <Text size={Typography.FONT_SIZE_14} styles={styles.delete}>
        X
      </Text>
      <Text size={Typography.FONT_SIZE_12} styles={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PURPLE,
    borderRadius: 15,
    marginRight: moderateScale(5, 0.2),
    marginBottom: moderateVerticalScale(5, 0.2),
    paddingRight: moderateScale(10, 0.2),
    paddingLeft: moderateScale(5, 0.2),
    paddingVertical: moderateVerticalScale(4, 0.2),
  },
  delete: {
    paddingLeft: moderateScale(5, 0.2),
    paddingRight: moderateScale(3, 0.2),
  },
  text: {
    paddingHorizontal: moderateScale(3, 0.2),
  },
});

export default React.memo(TagButton);
