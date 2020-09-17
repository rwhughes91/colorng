import FirebaseProvider from '@context/FirebaseProvider';
import Navigation from '@navigations/AppNavigator';
import { registerRootComponent, AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setLoading(false)} />;
  }

  return (
    <FirebaseProvider>
      <Navigation />
    </FirebaseProvider>
  );
};

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default registerRootComponent(App);
