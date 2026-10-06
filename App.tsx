import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './src/navigations/AppNavigator';
import { AuthProvider } from './src/contexts/AuthContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />

        <AppNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;