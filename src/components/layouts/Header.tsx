import SearchInput from '@components/ui/inputs/SearchInput';
import HeaderText from '@components/ui/text/HeaderText';
import * as Constants from '@constants/index';
import { Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
  title: { text: string; location: 'above' | 'below'; color?: string };
  showInputColors?: {
    color: string;
    placeholderColor?: string;
    iconColor?: string;
    backgroundColors?: string[];
  };
  showInput?: boolean;
  styles?: StyleProp<ViewStyle>;
}

const Header: React.FC<Props> = (props) => {
  const headerText = (
    <HeaderText key="header" color={props.title.color}>
      {props.title.text}
    </HeaderText>
  );
  const searchInput = <SearchInput key="searchInput" {...props.showInputColors} />;
  const items = [];
  if (props.showInput) {
    if (props.title.location === 'above') {
      items.push(headerText, searchInput);
    } else {
      items.push(searchInput, headerText);
    }
  } else {
    items.push(headerText);
  }
  return <View style={[styles.header, props.styles]}>{items}</View>;
};

const styles = StyleSheet.create({
  header: {
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Globals.HEADER_HEIGHT,
    marginVertical: Globals.HEADER_MARGINS,
  },
});

export default React.memo(Header);
