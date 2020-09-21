import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';
export const FONT_FAMILY_SEMIBOLD = 'OpenSans-SemiBold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_SEMIBOLD = '600';

// FONT SIZE
export const FONT_SIZE_30 = scaleFont(30);
export const FONT_SIZE_28 = scaleFont(28);
export const FONT_SIZE_26 = scaleFont(26);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR: { fontFamily: string; fontWeight: '400' } = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD: { fontFamily: string; fontWeight: '700' } = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_SEMIBOLD: { fontFamily: string; fontWeight: '600' } = {
  fontFamily: FONT_FAMILY_SEMIBOLD,
  fontWeight: FONT_WEIGHT_SEMIBOLD,
};
