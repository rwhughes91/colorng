import * as Constants from '@constants/index';

import { boxShadow as shadowMixin } from './mixins';

export const BORDER_RADIUS = 10;
export const COMPONENT_HEIGHT = 45;
export const COMPONENT_WIDTH = '100%';

// Backdrop
export const HEADER_TRANSLATE_Y =
  Constants.DEVICE_WIDTH < Constants.BREAKPOINT
    ? Constants.DEVICE_WIDTH / 3
    : Constants.DEVICE_WIDTH / 2;

// Shadow
export const BOX_SHADOW = shadowMixin('black', { height: 15, width: 4 }, 20, 0.15);

// Main
export const CONTENT_WIDTH = Constants.DEVICE_WIDTH * 0.85;
export const MAX_CONTENT_WIDTH = 500;
