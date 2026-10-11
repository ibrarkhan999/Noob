import { RootStackParamList } from './types';
import TabNav from './TabNav';
import AuthNav from './AuthNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNav() {
  const user = true;
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {user ? (
        <Stack.Screen name="TabNav" component={TabNav} />
      ) : (
        <Stack.Screen name="AuthNav" component={AuthNav} />
      )}
    </Stack.Navigator>
  );
}
