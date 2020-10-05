import { useNavigation } from '@react-navigation/native';
import { Typography, Colors, Globals } from '@styles/index';
import { Navigation } from '@typeDefs/index';
import React, { useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
  color?: string;
  size?: number;
  navigation: Navigation;
  children: string;
  styles?: StyleProp<ViewStyle>;
}

const CardButton: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  const fontSize = props.size || Typography.FONT_SIZE_16;
  const color = props.color || Colors.BLUE;

  const navigate = useCallback(() => {
    navigation.navigate(props.navigation.name, props.navigation.params);
  }, [navigation, props.navigation]);

  return (
    <TouchableOpacity
      style={[styles.container, props.styles]}
      onPress={navigate}
      activeOpacity={Globals.ACTIVE_OPACITY}
    >
      <Text style={{ ...styles.text, fontSize, color }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Typography.FONT_REGULAR,
  },
});

export default React.memo(CardButton);
