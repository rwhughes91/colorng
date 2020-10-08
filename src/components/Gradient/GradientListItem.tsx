import Color from '@components/Color/Color';
import ForwardButton from '@components/ui/buttons/ForwardButton';
import Text from '@components/ui/text/Text';
import useNavigation from '@hooks/useNavigation';
import { Colors, Globals } from '@styles/index';
import { Gradient } from '@typeDefs/index';
import { capitalize } from '@utils/helpers';
import React, { useCallback } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

interface Props extends Gradient {
  iconSize: number;
  styles?: StyleProp<ViewStyle>;
  topBorder?: boolean;
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

  const onClickHandler = useCallback(() => {
    navigateToDetail();
  }, [navigateToDetail]);

  return (
    <TouchableOpacity
      style={[styles.gradientList, { borderTopWidth: props.topBorder ? 1 : 0 }]}
      activeOpacity={0.9}
      onPress={onClickHandler}
    >
      <View style={[styles.textContainer, { width: Globals.COLOR_SIZE * 5 }]}>
        <Text color={Colors.BLUE}>{capitalize(props.name)}</Text>
        {/* <Text color={Colors.PINK}>{`${props.likes} ${props.likes === 1 ? 'like' : 'likes'}`}</Text> */}
      </View>
      <View style={styles.gradientContainer}>
        <View style={[styles.colorsContainer]}>
          {props.colors.map((color, i) => {
            const additionalStyles = {};
            // if (i === 0) {
            //   additionalStyles = {
            //     borderTopLeftRadius: Globals.BORDER_RADIUS_SMALL,
            //     borderBottomLeftRadius: Globals.BORDER_RADIUS_SMALL,
            //   };
            // }
            // if (i === props.colors.length - 1) {
            //   additionalStyles = {
            //     borderTopRightRadius: Globals.BORDER_RADIUS_SMALL,
            //     borderBottomRightRadius: Globals.BORDER_RADIUS_SMALL,
            //   };
            // }
            return (
              <Color
                key={i}
                color={color.hex.startsWith('#') ? color.hex : `#${color.hex}`}
                colorStyles={{ position: 'relative', ...additionalStyles }}
              />
            );
          })}
        </View>
        <View style={styles.button}>
          <ForwardButton size={Globals.COLOR_SIZE} iconSize={props.iconSize} />
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
    paddingBottom: moderateVerticalScale(14),
    paddingTop: moderateVerticalScale(6),
  },
  gradientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
