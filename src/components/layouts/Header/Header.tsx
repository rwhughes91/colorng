import SearchInput from '@components/ui/inputs/SearchInput';
import HeaderText from '@components/ui/text/HeaderText';
import Text from '@components/ui/text/Text';
import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import styles from './HeaderStyles';

interface Props {
  title: { text: string; location: 'above' | 'below'; color?: string };
  showInputColors?: {
    color: string;
    placeholderColor?: string;
    iconColor?: string;
    backgroundColors?: string[];
  };
  description?: string;
  showInput?: boolean;
  styles?: StyleProp<ViewStyle>;
  onSubmitEditingHandler?: (x?: any) => void;
  searchInputPlaceholder?: string;
}

const Header: React.FC<Props> = (props) => {
  const headerText = [
    <HeaderText key="header" color={props.title.color}>
      {props.title.text}
    </HeaderText>,
    !!props.description && <Text key="description">{props.description}</Text>,
  ];
  const searchInput = (
    <SearchInput
      key="searchInput"
      {...props.showInputColors}
      onSubmitEditingHandler={props.onSubmitEditingHandler}
      placeholder={props.searchInputPlaceholder}
    />
  );
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

export default React.memo(Header);
