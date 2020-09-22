import PopularSvg from '@components/svgs/PopularSvg';
import Card from '@components/ui/Card';
import React from 'react';

const FavoritesCard: React.FC = () => {
  return (
    <Card
      header="Our Favorites"
      description="Our most popular gradients"
      body={<PopularSvg size="100%" />}
      bodyStyles={{ width: '75%' }}
      locationName="Search"
    />
  );
};

export default React.memo(FavoritesCard);
