import ColorSvg from '@components/svgs/ColorSvg';
import Card from '@components/ui/Card';
import React from 'react';

const TodaysGradientsCard: React.FC = () => {
  return (
    <Card
      header="Today's Featured Gradients"
      description="Check out our daily generated gradients"
      body={<ColorSvg size="100%" />}
      locationName="List"
    />
  );
};

export default React.memo(TodaysGradientsCard);
