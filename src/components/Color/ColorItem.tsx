import HeartIcon from '@components/icons/HeartIcon';
import Text from '@components/ui/text/Text';
import useFirebase from '@hooks/useFirebase';
import * as actions from '@store/actions/index';
import { Colors, Globals } from '@styles/index';
import { Colors as ColorsType } from '@typeDefs/index';
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
import { useSelector, useDispatch } from 'react-redux';

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
}

const ColorItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const userColors = useSelector<{ gradient: { userColors: ColorsType } }, ColorsType>(
    (state) => state.gradient.userColors
  );

  let focused = false;
  if (userColors.findIndex((item) => item.hex === props.hex) !== -1) {
    focused = true;
  }

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
        color={props.hex.startsWith('#') ? props.hex : `#${props.hex}`}
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
              onPress={focused ? onColorRemoverHandler : onColorSaveHandler}
              activeOpacity={Globals.ACTIVE_OPACITY}
              style={{ padding: 10 }}
            >
              <HeartIcon size={24} focused={focused} color={focused ? Colors.PINK : Colors.GRAY} />
            </TouchableOpacity>
          )}
          {props.customIcon}
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
