import HeaderContainer from '@components/layouts/HeaderContainer';
import HeaderText from '@components/ui/text/HeaderText';
import { Globals } from '@styles/index';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  title: string;
}

const HeaderNoInput: React.FC<Props> = (props) => {
  return (
    <HeaderContainer styles={styles.header}>
      <HeaderText>{props.title}</HeaderText>
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
});

export default React.memo(HeaderNoInput);
