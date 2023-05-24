import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {login} from './apiCalls';

import {loginStyles} from './login.styles';
import CustomText from '../../components/CustomText';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const { data, isLoading, isError, error } = useQuery('users', getUsers);
  const {mutate, isLoading, isError, error} = useMutation(login as any);

  const navigation = useNavigation<any>();

  const handleLogin = () => {
    mutate({email, password} as any);
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password
  };

  const handleLoginWithGoogle = () => {
    // Logic for handling login with Google
    console.log('hi');
  };

  const loginWithEmailAndPassword = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.logo}>NaijaConnect</Text>
      </View>
      <CustomText style={styles.loginText}>Login to your Account</CustomText>
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      {isError && <Text style={styles.errorText}>Invalid Login details</Text>}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>
          {isLoading ? 'loading...' : 'Login'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.otherSignIn}>
        <Text style={styles.siginInWithOtherText}> - Or signin with - </Text>
        <View style={styles.iconWrapper}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text>Twitter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.signUpTextWrapper}>
        <Text>Don't Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(loginStyles as any);

export default LoginScreen;
