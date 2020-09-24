import Header from '@components/layouts/Header';
import Layout from '@components/layouts/Layout';
import ColorButtons from '@components/ui/buttons/TagButton/TagButtons';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import { Colors, Globals } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'Search'>;

const GradientSearch: React.FC<Props> = () => {
  return (
    <Layout header whiteBackground>
      <View style={styles.container}>
        <Header
          title={{ text: 'Find a Gradient', location: 'above', color: Colors.PINK }}
          showInput
          showInputColors={{
            backgroundColors: [Colors.ORANGE, Colors.PINK],
            color: 'white',
            placeholderColor: 'white',
            iconColor: 'white',
          }}
        />
        <View style={styles.wrapper}>
          <ColorButtons buttons={['#ebeef2', 'red', 'orange', 'green', 'magenta']} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    top: -Globals.HEADER_MARGINS,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
});

export default React.memo(GradientSearch);
