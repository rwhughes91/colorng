import * as Constants from '@constants/index';
import ExpoConstants from 'expo-constants';
import { Platform } from 'react-native';
import { moderateVerticalScale, verticalScale } from 'react-native-size-matters';

import { boxShadow as shadowMixin, backdropHeight } from './mixins';

export const BORDER_RADIUS = 10;
export const BORDER_RADIUS_SMALL = 3;

export const COMPONENT_HEIGHT = 45;
export const COMPONENT_WIDTH = '100%';

// Header Height & Spacing
const extraSpace = Constants.DEVICE_HEIGHT * 0.2 - 34 - COMPONENT_HEIGHT;
export const HEADER_MARGINS = extraSpace / 3;
export const HEADER_HEIGHT = extraSpace / 3 + 34 + COMPONENT_HEIGHT;

export const HEADER_HEIGHT_WITH_STATUS_BAR =
  Platform.OS === 'android' ? ExpoConstants.statusBarHeight * 3 : ExpoConstants.statusBarHeight * 2;

export const HEADER_TRANSLATE_Y =
  backdropHeight() -
  HEADER_HEIGHT_WITH_STATUS_BAR -
  moderateVerticalScale(1.65, -0.3) * (HEADER_MARGINS + HEADER_HEIGHT);

// Shadow
export const BOX_SHADOW = shadowMixin('black', { height: 15, width: 4 }, 20, 0.15);

// Main
export const CONTENT_WIDTH = Constants.DEVICE_WIDTH * 0.9;
export const MAX_CONTENT_WIDTH = 650;
export const MAX_CONTENT_WIDTH_THIN = 550;

// Color Squares
export const COLOR_SIZE = CONTENT_WIDTH / 6;
export const COLOR_SIZE_VERTICAL = CONTENT_WIDTH / 8;
export const MAX_COLOR_SIZE = MAX_CONTENT_WIDTH / 8;

export const BODY_ICON = moderateVerticalScale(34, 0.2);

export const BACKDROP_TRANSLATE_SMALL = HEADER_TRANSLATE_Y + verticalScale(30);

export const HEIGHT_BREAKPOINT = 1000;

export const BUTTON_TOP =
  Constants.DEVICE_HEIGHT > HEIGHT_BREAKPOINT
    ? backdropHeight() - BACKDROP_TRANSLATE_SMALL - HEADER_HEIGHT_WITH_STATUS_BAR
    : backdropHeight() -
      BACKDROP_TRANSLATE_SMALL -
      HEADER_HEIGHT_WITH_STATUS_BAR +
      (Platform.OS === 'ios' ? moderateVerticalScale(20) : moderateVerticalScale(8));

export const LIKE_BUTTON_STYLES: {
  alignItems: 'flex-end' | 'flex-start' | 'center';
  zIndex: number;
  position: 'absolute' | 'relative';
  right: number;
  top: number;
} = {
  alignItems: 'flex-end',
  zIndex: 99,
  position: 'absolute',
  top: BUTTON_TOP,
  right: 10,
};

export const ACTIVE_OPACITY = 0.75;
