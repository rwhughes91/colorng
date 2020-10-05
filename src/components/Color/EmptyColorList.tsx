import React from 'react';

import EmptyGradientList from '../Gradient/EmptyGradientList';

const EmptyColorList: React.FC = () => {
  return <EmptyGradientList title="No saved colors" />;
};

export default React.memo(EmptyColorList);
