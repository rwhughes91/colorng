import { Feather } from '@expo/vector-icons';
import useNavigation from '@hooks/useNavigation';
import { Globals, Typography, Colors } from '@styles/index';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useCallback } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface Props {
  placeholder?: string;
  backgroundColors?: string[];
  color?: string;
  iconColor?: string;
  placeholderColor?: string;
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
      style={styles.container}
      start={[0, 1]}
      end={[1, 0]}
    >
      <View style={styles.searchIconContainer}>
        <Feather name="search" size={24} color={props.iconColor || Colors.BLUE} />
      </View>
      <TextInput
        style={{ ...styles.searchInput, color: props.color || Colors.BLUE }}
        placeholder={props.placeholder || 'Search a color'}
        onSubmitEditing={onSubmitEditingHandler}
        ref={textInputRef}
        placeholderTextColor={props.placeholderColor}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Globals.COMPONENT_WIDTH,
    height: Globals.COMPONENT_HEIGHT,
    borderRadius: Globals.BORDER_RADIUS,
    paddingHorizontal: moderateScale(3, 0.2),
  },
  searchIconContainer: {
    marginHorizontal: moderateScale(9, 0.2),
  },
  searchInput: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: Typography.FONT_SIZE_16,
    ...Typography.FONT_REGULAR,
  },
});

export default React.memo(SearchInput);
