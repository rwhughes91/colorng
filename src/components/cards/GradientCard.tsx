import ColorList from '@components/Color/ColorList';
import Card from '@components/ui/Card';
import { Gradient } from '@typeDefs/index';
import React from 'react';

type Props = Gradient;

const GradientCard: React.FC<Props> = (props) => {
  return (
    <Card
      header="Architecture"
      description="Somber, serious, and mild"
      body={<ColorList items={props.colors} fill />}
      noBorder
      navigation={{ name: 'Detail', params: props }}
    />
  );
};

export default React.memo(GradientCard);
