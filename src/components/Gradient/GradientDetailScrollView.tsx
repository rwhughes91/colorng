import AnimatedHeader from '@components/Gradient/detail/AnimatedHeader';
import ColorListLayout from '@components/layouts/ColorListLayout';
import Main from '@components/layouts/Main';
import HeaderLabelText from '@components/texts/HeaderLabelText';
import { Colors as ColorsType, Gradients, Gradient } from '@typeDefs/index';
import React, { useCallback } from 'react';
import { Animated, View } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

import GradientList from './GradientList';

interface Props {
  colors: ColorsType;
  gradients: Gradients;
  scrollEnabled?: boolean;
  onScroll?: any;
  title: string;
  description?: string;
  animatedValue: Animated.Value;
  loading?: boolean;
  onItemPress?: (gradient: Gradient) => void;
  onSaveColorHandler: (x: string, y: string, z: string) => void;
}

const GradientDetailScrollView: React.FC<Props> = (props) => {
  const { onItemPress } = props;
  const onReplaceHandler = useCallback(
    (gradient: Gradient) => {
      onItemPress && onItemPress(gradient);
    },
    [onItemPress]
  );

  const header = (
    <View>
      <AnimatedHeader
        title={{ text: props.title, location: 'above' }}
        description={props.description}
        animatedValue={props.animatedValue}
      />
      <Main small styles={{ width: '100%' }}>
        <ColorListLayout
          colors={props.colors}
          title="Colors"
          styles={{ marginTop: 0 }}
          icon
          onSaveColorHandler={props.onSaveColorHandler}
        />
        {props.gradients.length > 0 && (
          <HeaderLabelText styles={{ marginTop: moderateVerticalScale(15) }}>
            Other gradients you may like
          </HeaderLabelText>
        )}
      </Main>
    </View>
  );
  return (
    <GradientList
      gradients={props.gradients}
      listHeaderComponent={header}
      styles={{ paddingTop: 3 }}
      scrollEnabled={props.scrollEnabled}
      animated
      overScrollMode="never"
      scrollEventThrottle={16}
      onScroll={props.onScroll}
      onItemPress={onReplaceHandler}
    />
  );
};

export default React.memo(GradientDetailScrollView);
