import { Feather } from '@expo/vector-icons';
import { Globals, Spacing, Typography, Colors } from '@styles/index';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface Props {
  placeholder?: string;
  gradientColors?: string[];
}

const SearchInput: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchIconContainer}>
        <Feather name="search" size={24} color={Colors.BLUE} />
      </View>
      <TextInput style={styles.searchInput} placeholder={props.placeholder || 'Search a color'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Globals.COMPONENT_WIDTH,
    height: Globals.COMPONENT_HEIGHT,
    borderRadius: Globals.BORDER_RADIUS,
  },
  searchIconContainer: {
    position: 'absolute',
    zIndex: 2,
    left: Spacing.SCALE_30,
  },
  searchInput: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: Colors.BLUE,
    fontSize: Typography.FONT_SIZE_16,
    ...Typography.FONT_REGULAR,
  },
});

export default React.memo(SearchInput);
