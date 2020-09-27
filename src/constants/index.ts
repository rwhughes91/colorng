import { Dimensions } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_RATIO_HW = DEVICE_HEIGHT / DEVICE_WIDTH;
export const DEVICE_RATIO_WH = DEVICE_WIDTH / DEVICE_HEIGHT;
export const BREAKPOINT = 750;
