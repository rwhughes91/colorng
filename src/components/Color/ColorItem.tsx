import HeartIcon from '@components/icons/HeartIcon';
import CheckMarkButton from '@components/ui/buttons/CheckMarkButton';
import Text from '@components/ui/text/Text';
import * as constants from '@constants/index';
import useFirebase from '@hooks/useFirebase';
import * as actions from '@store/actions/index';
import { Colors, Globals } from '@styles/index';
import { capitalize } from '@utils/helpers';
import React, { useCallback } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
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
  onSaveColorHandler: (x: string, y: string, z: string) => void;
}

const ColorItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const { onSaveColorHandler } = props;
  const onColorSaveHandler = useCallback(() => {
    onSaveColorHandler(props.name, props.hex, props.hex);
  }, [props.name, props.hex, onSaveColorHandler]);

  const onColorRemoverHandler = useCallback(() => {
    dispatch(actions.removeGradientOrColor('userColors', props.hex, firebase?.user?.uid));
  }, [dispatch, props.hex, firebase?.user?.uid]);

  return (
    <View style={[styles.container, props.styles, props.fill ? { flex: 1 } : null]}>
      <Color
        color={props.hex}
        colorStyles={[props.colorStyles, { opacity: 1 }]}
        round
        fill={props.fill}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
    alignItems: 'center',
    height:
      constants.DEVICE_HEIGHT > Globals.HEIGHT_BREAKPOINT
        ? Globals.MAX_COLOR_SIZE + 6
        : Globals.COLOR_SIZE + 10,
  },
  TextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
  },
});

export default React.memo(ColorItem);
