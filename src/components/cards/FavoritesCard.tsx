import PopularSvg from '@components/svgs/PopularSvg';
import Card from '@components/ui/Card';
import React from 'react';

const FavoritesCard: React.FC = () => {
  return (
    <Card
      header="Our Favorites"
      description="Our most popular gradients"
      svg={<PopularSvg size="100%" />}
      svgStyles={{ width: '75%' }}
    />
  );
};

export default React.memo(FavoritesCard);
