import FirebaseProvider from '@context/FirebaseProvider';
import Navigation from '@navigations/AppNavigator';
import { registerRootComponent, AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setLoading(false)} />;
  }

  return (
    <SafeAreaProvider>
      <FirebaseProvider>
        <StatusBar style="dark" />
        <Navigation />
      </FirebaseProvider>
    </SafeAreaProvider>
  );
};

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });
};

export default registerRootComponent(App);
