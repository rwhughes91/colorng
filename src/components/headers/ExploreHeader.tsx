import HeaderContainer from '@components/layouts/HeaderContainer';
import SearchInput from '@components/ui/inputs/SearchInput';
import HeaderText from '@components/ui/text/HeaderText';
import React from 'react';

interface Props {
  title: string;
}

const ExploreHeader: React.FC<Props> = (props) => {
  return (
    <HeaderContainer>
      <SearchInput />
      <HeaderText>{props.title}</HeaderText>
    </HeaderContainer>
  );
};

export default React.memo(ExploreHeader);
