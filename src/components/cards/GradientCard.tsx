import ColorList from '@components/Color/ColorList';
import Card from '@components/ui/Card';
import { Gradient } from '@typeDefs/index';
import React from 'react';

type Props = Gradient;

const GradientCard: React.FC<Props> = (props) => {
  const gradient: any = { ...props };
  delete gradient.createdAt;
  return (
    <Card
      header={props.name}
      description={props.description}
      body={<ColorList items={props.colors} fill containerStyles={{ marginTop: 10 }} />}
      noBorder
      navigation={{ name: 'Detail', params: gradient }}
    />
  );
};

export default React.memo(GradientCard);
