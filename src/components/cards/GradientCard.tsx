import ColorList from '@components/Color/ColorList';
import Card from '@components/ui/Card';
import React from 'react';
import { moderateVerticalScale } from 'react-native-size-matters';

const GradientCard: React.FC = () => {
  const items = [
    { color: '#3C233C', name: 'Magenta' },
    { color: '#463B4D', name: 'Dark Gray Violet' },
    { color: '#688188', name: 'Gray Cyan' },
    { color: '#CCB58D', name: 'Beige' },
    { color: '#DFCC73', name: 'Gold' },
  ];
  return (
    <Card
      header="Architecture"
      description="Somber, serious, and mild"
      body={<ColorList items={items} height={moderateVerticalScale(50)} />}
      locationName="Detail"
      noBorder
    />
  );
};

export default React.memo(GradientCard);
