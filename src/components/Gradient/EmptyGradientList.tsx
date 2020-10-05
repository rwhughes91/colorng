import HeaderText from '@components/ui/text/HeaderText';
import Text from '@components/ui/text/Text';
import { Colors } from '@styles/index';
import React from 'react';
import { View } from 'react-native';

interface Props {
  title?: string;
  body?: string;
}

const EmptyGradientList: React.FC<Props> = (props) => {
  return (
    <View>
      <HeaderText color={Colors.PINK} styles={{ marginBottom: 6 }}>
        {props.title || 'No saved gradients'}
      </HeaderText>
      <Text color={Colors.GRAY}>
        {props.body ||
          'You can save gradients and colors that you like. As you search, tap the heart icon!'}
      </Text>
    </View>
  );
};

export default React.memo(EmptyGradientList);
