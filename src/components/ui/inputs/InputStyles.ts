import { Globals, Typography } from '@styles/index';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Globals.COMPONENT_WIDTH,
    height: Globals.COMPONENT_HEIGHT,
    borderRadius: Globals.BORDER_RADIUS,
    paddingHorizontal: moderateScale(3, 0.2),
  },
  searchInput: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: Typography.FONT_SIZE_16,
    ...Typography.FONT_REGULAR,
  },
  searchIconContainer: {
    marginHorizontal: moderateScale(9, 0.2),
  },
});
