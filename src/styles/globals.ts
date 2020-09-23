import * as Constants from '@constants/index';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

import { boxShadow as shadowMixin } from './mixins';

export const BORDER_RADIUS = 10;
export const BORDER_RADIUS_SMALL = 3;

export const COMPONENT_HEIGHT = 45;
export const COMPONENT_WIDTH = '100%';

export const HEADER_TRANSLATE_Y =
  Constants.DEVICE_WIDTH < Constants.BREAKPOINT
    ? moderateVerticalScale(Constants.DEVICE_WIDTH / 3, -0.5)
    : moderateVerticalScale(Constants.DEVICE_WIDTH / 1.5, -0.5);

// Shadow
export const BOX_SHADOW = shadowMixin('black', { height: 15, width: 4 }, 20, 0.15);

// Main
export const CONTENT_WIDTH = Constants.DEVICE_WIDTH * 0.85;
export const MAX_CONTENT_WIDTH = 500;

// Color Squares
export const COLOR_SIZE = moderateScale(50);
export const COLOR_SIZE_VERTICAL = moderateVerticalScale(55);
