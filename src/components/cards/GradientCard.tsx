import ColorList from '@components/Color/ColorList';
import Card from '@components/ui/Card';
import { Colors } from '@typeDefs/index';
import React from 'react';

interface Props {
  colors: Colors;
}

const GradientCard: React.FC<Props> = (props) => {
  return (
    <Card
      header="Architecture"
      description="Somber, serious, and mild"
      body={<ColorList items={props.colors} fill />}
      locationName="Detail"
      noBorder
    />
  );
};

export default React.memo(GradientCard);
