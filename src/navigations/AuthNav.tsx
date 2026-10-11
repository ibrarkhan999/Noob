import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import LoginScreen from '../features/auth/screens/LoginScreen';
import RegisterScreen from '../features/auth/screens/RegisterScreen';

const authStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNav() {
  return (
    <authStack.Navigator screenOptions={{ headerShown: false }}>
      <authStack.Screen name="Login" component={LoginScreen} />
      <authStack.Screen name="Register" component={RegisterScreen} />
    </authStack.Navigator>
  );
}
