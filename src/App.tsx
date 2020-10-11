import FirebaseProvider from '@context/FirebaseProvider';
import Navigation from '@navigations/AppNavigator';
import gradientReducer from '@store/reducers/gradient';
import warning from '@utils/warning';
import { registerRootComponent, AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

warning();

const rootReducer = combineReducers({
  gradient: gradientReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setLoading(false)} />;
  }

  return (
    <Provider store={store}>
      <FirebaseProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </FirebaseProvider>
    </Provider>
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
