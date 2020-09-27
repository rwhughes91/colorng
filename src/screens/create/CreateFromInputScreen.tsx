import CheckMarkIcon from '@components/icons/CheckMarkIcon';
import ColorListLayout from '@components/layouts/ColorListLayout';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Button from '@components/ui/buttons/Button';
import * as Constants from '@constants/index';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import { Colors } from '@styles/index';
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'Image'>;

const CreateFromImageScreen: React.FC<Props> = () => {
  const checkMarkIconContainer = (
    <View style={styles.checkMarkIcon}>
      <CheckMarkIcon size={24} color="green" />
    </View>
  );
  let items = (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <ColorListLayout
        colors={colors}
        title="Select from Your Colors"
        customIcon={checkMarkIconContainer}
      />
      <View style={styles.buttonContainer}>
        <Button>Save</Button>
      </View>
    </View>
  );
  if (Constants.DEVICE_HEIGHT < 600) {
    items = (
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}>
        <ColorListLayout
          colors={colors}
          title="Select from Your Colors"
          customIcon={checkMarkIconContainer}
        />
        <View style={styles.buttonContainer}>
          <Button>Save</Button>
        </View>
      </ScrollView>
    );
  }
  return (
    <>
      <Layout header whiteBackground>
        <View style={styles.container}>
          <Header
            title={{ text: 'Create a Gradient', location: 'above', color: Colors.PINK }}
            showInput
            showInputColors={{
              backgroundColors: [Colors.ORANGE, Colors.PINK],
              color: 'white',
              placeholderColor: 'white',
              iconColor: 'white',
            }}
          />
          {items}
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    flex: 1,
    maxHeight: 200,
  },
  checkMarkIcon: {
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(CreateFromImageScreen);

const colors = [
  { color: '#3C233C', name: 'Magenta' },
  { color: '#463B4D', name: 'Dark Gray Violet' },
  { color: '#688188', name: 'Gray Cyan' },
  { color: '#CCB58D', name: 'Beige' },
  { color: '#DFCC73', name: 'Gold' },
];
