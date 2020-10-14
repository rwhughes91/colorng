import { Globals } from '@styles/index';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH_THIN,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Globals.HEADER_HEIGHT,
    marginBottom: Globals.HEADER_MARGINS,
    minHeight: 100,
  },
});
