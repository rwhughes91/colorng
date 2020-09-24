import AddColorSvg from '@components/svgs/AddColorSvg';
import Card from '@components/ui/Card';
import React from 'react';

const CreateGradientsCard: React.FC = () => {
  return (
    <Card
      header="Create Your Own"
      description="Generate some awesome gradients"
      body={<AddColorSvg size="100%" />}
      navigation={{ name: 'Create' }}
    />
  );
};

export default React.memo(CreateGradientsCard);
