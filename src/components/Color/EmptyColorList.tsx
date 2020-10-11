import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import EmptyGradientList from '../Gradient/EmptyGradientList';

interface Props {
  styles?: StyleProp<ViewStyle>;
  emptyText?: { title: string; body: string };
}

const EmptyColorList: React.FC<Props> = (props) => {
  return (
    <EmptyGradientList
      title={props.emptyText?.title || 'No saved colors'}
      styles={props.styles}
      body={props.emptyText?.body}
    />
  );
};

export default React.memo(EmptyColorList);
