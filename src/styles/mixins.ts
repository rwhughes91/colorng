import * as Constants from '@constants/index';
import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375;
const heightGuideLineBaseHeight = 680;

type Style = number | string;

export const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleHeightInverse = (size: number) =>
  (heightGuideLineBaseHeight / WINDOW_HEIGHT) * size;

export const adjustHeader = (size: number) => {
  const baseHeight = 900;
  return (baseHeight / WINDOW_HEIGHT) * 2 * size;
};

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

function dimensions(top: Style, right = top, bottom = top, left = right, property: string) {
  return {
    [`${property}Top`]: top,
    [`${property}Right`]: right,
    [`${property}Bottom`]: bottom,
    [`${property}Left`]: left,
  };
}

export function margin(top: Style, right: Style, bottom: Style, left: Style) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top: Style, right: Style, bottom: Style, left: Style) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color: string,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}

export const sizeResponse = (x: string | number, y: string | number) => {
  if (Constants.DEVICE_WIDTH > Constants.BREAKPOINT) {
    return y;
  }
  return x;
};

export function roundCornersRadius(type: 'first' | 'last', borderRadius: number) {
  if (type === 'first') {
    return {
      borderTopLeftRadius: borderRadius,
    };
  }
  return {
    borderBottomLeftRadius: borderRadius,
  };
}
