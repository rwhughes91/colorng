import Color from '@components/Color/Color';
import DeleteButton from '@components/ui/buttons/DeleteButton';
import ForwardButton from '@components/ui/buttons/ForwardButton';
import Text from '@components/ui/text/Text';
import * as Constants from '@constants/index';
import useNavigation from '@hooks/useNavigation';
import { Colors, Globals } from '@styles/index';
import { Gradient } from '@typeDefs/index';
import { capitalize } from '@utils/helpers';
import React, { useCallback } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';

interface Props extends Gradient {
  iconSize: number;
  styles?: StyleProp<ViewStyle>;
  topBorder?: boolean;
  icon?: 'forward' | 'delete';
  onItemPress?: (gradient: any) => void;
  onIconPress?: (id: string) => void;
  itemOpacity?: number;
  replace?: boolean;
}

const GradientListItem: React.FC<Props> = (props) => {
  const navigateToDetail = useNavigation({
    name: 'Detail',
    params: {
      name: props.name,
      likes: props.likes,
      description: props.description,
      colors: props.colors,
      id: props.id,
    },
  });

  const { onItemPress } = props;
  const onClickHandler = useCallback(() => {
    if (onItemPress) {
      onItemPress({
        name: props.name,
        likes: props.likes,
        description: props.description,
        colors: props.colors,
        id: props.id,
      });
    } else {
      navigateToDetail();
    }
  }, [
    navigateToDetail,
    onItemPress,
    props.colors,
    props.name,
    props.likes,
    props.description,
    props.id,
  ]);

  return (
    <TouchableOpacity
      style={[styles.gradientList, { borderTopWidth: props.topBorder ? 1 : 0 }]}
      activeOpacity={props.itemOpacity || 0.9}
      onPress={onClickHandler}
    >
      <View
        style={[
          styles.textContainer,
          { width: Globals.COLOR_SIZE * 5, maxWidth: Globals.MAX_COLOR_SIZE * 5 },
        ]}
      >
        <Text color={Colors.BLUE}>{capitalize(props.name)}</Text>
      </View>
      <View style={styles.gradientContainer}>
        <View style={[styles.colorsContainer]}>
          {props.colors.map((color, i) => {
            const additionalStyles = {};
            return (
              <Color
                key={i}
                color={color.hex}
                colorStyles={[
                  { position: 'relative', ...additionalStyles },
                  { marginHorizontal: -0.1 },
                ]}
              />
            );
          })}
        </View>
        <View style={styles.button}>
          {props.icon === 'delete' ? (
            <DeleteButton
              size={Globals.COLOR_SIZE}
              iconSize={props.iconSize}
              onPress={() => props.onIconPress && props.onIconPress(props.id || '')}
            />
          ) : (
            <ForwardButton size={Globals.COLOR_SIZE} iconSize={props.iconSize} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientList: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
    paddingBottom: 14,
    paddingTop: 6,
  },
  gradientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height:
      Constants.DEVICE_HEIGHT > Globals.HEIGHT_BREAKPOINT
        ? Globals.MAX_COLOR_SIZE
        : Globals.COLOR_SIZE,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginBottom: 3,
  },
  colorsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default React.memo(GradientListItem);
