import { Feather } from '@expo/vector-icons';
import useNavigation from '@hooks/useNavigation';
import { Colors } from '@styles/index';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useCallback } from 'react';
import { View, TextInput, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';

import styles from './InputStyles';

interface Props {
  placeholder?: string;
  backgroundColors?: string[];
  color?: string;
  noIcon?: boolean;
  iconColor?: string;
  placeholderColor?: string;
  onSubmitEditingHandler?: (x: string) => void;
  styles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  onChangeHandler?: (text: any) => void;
  value?: string;
  autoFocus?: boolean;
}

const SearchInput: React.FC<Props> = (props) => {
  const textInputRef = useRef<TextInput>(null);
  const navigateToSearch = useNavigation<{ tag: string }>({ name: 'Search' });

  const customOnSubmitEditingHandler = props.onSubmitEditingHandler;
  const onSubmitEditingHandler = useCallback(
    ({ nativeEvent }) => {
      if (nativeEvent.text.length > 0) {
        if (customOnSubmitEditingHandler) {
          textInputRef.current?.clear();
          customOnSubmitEditingHandler(nativeEvent.text);
        }
      }
    },
    [customOnSubmitEditingHandler]
  );

  const onPressHandler = useCallback(() => {
    if (!customOnSubmitEditingHandler) {
      navigateToSearch();
    }
  }, [customOnSubmitEditingHandler, navigateToSearch]);

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPressHandler}>
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
          onSubmitEditing={onSubmitEditingHandler}
          ref={textInputRef}
          placeholderTextColor={props.placeholderColor}
          autoFocus={
            props.autoFocus !== undefined ? props.autoFocus : !!customOnSubmitEditingHandler
          }
          pointerEvents={!customOnSubmitEditingHandler ? 'none' : 'auto'}
          onChange={props.onChangeHandler}
          value={props.value}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(SearchInput);
