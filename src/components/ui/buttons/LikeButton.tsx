import HeartIcon from '@components/icons/HeartIcon';
import PlusIcon from '@components/icons/PlusIcon';
import { Colors, Globals } from '@styles/index';
import React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface Props {
  focused: boolean;
  styles?: StyleProp<ViewStyle>;
  icon?: 'heart' | 'plus';
  onPress: () => void;
}

const LikeButton: React.FC<Props> = (props) => {
  const icon = props.icon || 'heart';
  return (
    <TouchableOpacity
      style={[styles.button, props.styles]}
      activeOpacity={1}
      onPress={props.onPress}
    >
      {icon === 'heart' ? (
        <HeartIcon focused={props.focused} size={Globals.BODY_ICON - 5} color={Colors.PINK} />
      ) : (
        <PlusIcon size={Globals.BODY_ICON} color={Colors.PINK} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: moderateScale(70, 0.2),
    height: moderateScale(70, 0.2),
    borderRadius: moderateScale(35, 0.2),
    backgroundColor: Colors.PEACH,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    ...Globals.BOX_SHADOW,
  },
});

export default React.memo(LikeButton);
