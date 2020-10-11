import HeartIcon from '@components/icons/HeartIcon';
import CheckMarkButton from '@components/ui/buttons/CheckMarkButton';
import Text from '@components/ui/text/Text';
import useFirebase from '@hooks/useFirebase';
import * as actions from '@store/actions/index';
import { Colors, Globals } from '@styles/index';
import { capitalize } from '@utils/helpers';
import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';

import Color from './Color';

interface Props {
  name: string;
  hex: string;
  icon?: boolean;
  fill?: boolean;
  styles?: StyleProp<ViewStyle>;
  colorStyles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  colorOnly?: boolean;
  customIcon?: React.ReactNode;
  focused?: boolean;
  checkmarkIcon?: boolean;
  iconPress?: (x: any) => void;
}

const ColorItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const onColorSaveHandler = useCallback(() => {
    dispatch(
      actions.addGradientOrColor(
        'userColors',
        { name: props.name, hex: props.hex, id: props.hex },
        firebase?.user?.uid
      )
    );
  }, [dispatch, props.name, props.hex, firebase?.user?.uid]);

  const onColorRemoverHandler = useCallback(() => {
    dispatch(actions.removeGradientOrColor('userColors', props.hex, firebase?.user?.uid));
  }, [dispatch, props.hex, firebase?.user?.uid]);

  return (
    <Animated.View style={[styles.container, { flex: props.fill ? 1 : 0 }, props.styles]}>
      <Color
        color={props.hex}
        colorStyles={[props.colorStyles, { opacity: 1 }]}
        fill={props.fill}
        scaleVertical
      />
      {!props.colorOnly && (
        <View style={[styles.TextContainer, props.textStylesView]}>
          <Text color={Colors.BLUE} styles={props.textStyles}>
            {capitalize(props.name)}
          </Text>
          {props.icon && (
            <TouchableOpacity
              onPress={props.focused ? onColorRemoverHandler : onColorSaveHandler}
              activeOpacity={Globals.ACTIVE_OPACITY}
              style={{ padding: 10 }}
            >
              <HeartIcon
                size={24}
                focused={props.focused || false}
                color={props.focused ? Colors.PINK : Colors.GRAY}
              />
            </TouchableOpacity>
          )}
          {props.customIcon}
          {props.checkmarkIcon && (
            <CheckMarkButton
              size={Globals.COLOR_SIZE * 0.9}
              iconSize={24}
              selected={props.focused}
              onPress={() =>
                props.iconPress &&
                props.iconPress({ name: props.name, hex: props.hex, id: props.hex })
              }
            />
          )}
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  TextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
    borderColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
});

export default React.memo(ColorItem);
