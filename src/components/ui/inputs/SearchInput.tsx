import { Feather } from '@expo/vector-icons';
import useNavigation from '@hooks/useNavigation';
import { Colors } from '@styles/index';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useCallback } from 'react';
import { View, TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native';

import styles from './InputStyles';

interface Props {
  placeholder?: string;
  backgroundColors?: string[];
  color?: string;
  noIcon?: boolean;
  iconColor?: string;
  placeholderColor?: string;
  onSubmitEditingHandler?: () => void;
  styles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
}

const SearchInput: React.FC<Props> = (props) => {
  const textInputRef = useRef<TextInput>(null);
  const navigateToSearch = useNavigation<{ text: string }>({ name: 'Search' });

  const onSubmitEditingHandler = useCallback(
    ({ nativeEvent }) => {
      if (nativeEvent.text.length > 0) {
        textInputRef.current?.clear();
        navigateToSearch({ text: nativeEvent.text });
      }
    },
    [navigateToSearch]
  );

  return (
    <LinearGradient
      colors={props.backgroundColors || ['white', 'white']}
      style={[styles.container, props.styles]}
      start={[0, 1]}
      end={[1, 0]}
    >
      {!props.noIcon && (
        <View style={styles.searchIconContainer}>
          <Feather name="search" size={24} color={props.iconColor || Colors.BLUE} />
        </View>
      )}
      <TextInput
        style={[{ ...styles.searchInput, color: props.color || Colors.BLUE }, props.inputStyles]}
        placeholder={props.placeholder || 'Search a color'}
        onSubmitEditing={props.onSubmitEditingHandler || onSubmitEditingHandler}
        ref={textInputRef}
        placeholderTextColor={props.placeholderColor}
      />
    </LinearGradient>
  );
};

export default React.memo(SearchInput);
