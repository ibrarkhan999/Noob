import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useAuth } from '../../../contexts/AuthContext';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const {login,isLoading } = useAuth()


  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      return;
    }
    
    login({email,password})

  };

  const isFormValid =
    email.trim().length > 0 &&
    password.trim().length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Welcome back 👋</Text>

        <Text style={styles.subtitle}>
          Login to continue to your account
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.passwordInput}
            />

            <Pressable
              onPress={() => setShowPassword(prev => !prev)}
            >
              <Text style={styles.showPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          style={styles.forgotPassword}
          onPress={() => {
            // TODO: Forgot password
          }}
        >
          <Text style={styles.forgotPasswordText}>
            Forgot password?
          </Text>
        </Pressable>

        <Pressable
          disabled={!isFormValid || isLoading}
          onPress={handleLogin}
          style={[
            styles.loginButton,
            (!isFormValid || isLoading) && styles.disabledButton,
          ]}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          )}
        </Pressable>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Don't have an account?
          </Text>

          <Pressable
            onPress={() => {
              // TODO: Navigate to Register
            }}
          >
            <Text style={styles.registerLink}>
              {' '}
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },

  form: {
    width: '100%',
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#777777',
    marginBottom: 32,
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111111',
    backgroundColor: '#FAFAFA',
  },

  passwordContainer: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 14,
    backgroundColor: '#FAFAFA',
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#111111',
  },

  showPassword: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },

  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
  },

  loginButton: {
    height: 52,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
  },

  disabledButton: {
    opacity: 0.5,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  registerText: {
    fontSize: 14,
    color: '#777777',
  },

  registerLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111111',
  },
});