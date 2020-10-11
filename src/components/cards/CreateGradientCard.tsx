import AddColorSvg from '@components/svgs/AddColorSvg';
import Card from '@components/ui/Card';
import useFirebase from '@hooks/useFirebase';
import React from 'react';

const CreateGradientsCard: React.FC = () => {
  const firebase = useFirebase();
  return (
    <Card
      header="Create Your Own"
      description="Generate some awesome gradients"
      body={<AddColorSvg size="100%" />}
      navigation={firebase?.user ? { name: 'Create' } : { name: 'Profile' }}
    />
  );
};

export default React.memo(CreateGradientsCard);
