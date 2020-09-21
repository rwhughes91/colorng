import AddColorSvg from '@components/svgs/AddColorSvg';
import Card from '@components/ui/Card';
import React from 'react';

const CreateGradientsCard: React.FC = () => {
  return (
    <Card
      header="Our Favorites"
      description="Our most popular gradients"
      svg={<AddColorSvg size="100%" />}
    />
  );
};

export default React.memo(CreateGradientsCard);
