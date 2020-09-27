import Text from '@components/ui/text/Text';
import { Colors } from '@styles/index';
import React from 'react';

interface Props {
  children: string;
}

const LabelText: React.FC<Props> = (props) => {
  return (
    <Text color={Colors.PINK} styles={{ marginBottom: 6 }}>
      {props.children}
    </Text>
  );
};

export default React.memo(LabelText);
