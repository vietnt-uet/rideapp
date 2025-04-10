import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, otp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/green_edu_bike_logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>Green EDU Bike</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="OTP"
          placeholderTextColor="#999"
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resendOtpContainer}>
        <Text style={styles.resendOtpText}>Bạn không nhận được Mã OTP ?</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Image
          source={require('./assets/ptit_logo.png')} 
          style={styles.ptitLogo}
          resizeMode="contain"
        />
        <Text style={styles.ptitText}>Một sản phẩm của PTIT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: width * 0.05,
  },
  logoContainer: {
    alignItems: 'center',
    width: '100%'
  },
  logo: {
    width: width * 0.4,
    height: height * 0.1,
  },
  logoText: {
    color: '#5cb85c',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.01,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: height * 0.06,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.04,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#5cb85c',
    paddingVertical: height * 0.015,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  resendOtpContainer: {
    alignItems: 'center',
    width: '100%',
  },
  resendOtpText: {
    color: '#333',
    fontSize: width * 0.035,
    textAlign: 'center'
  },
  bottomContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: height * 0.02,
  },
  ptitLogo: {
    width: width * 0.2,
    height: height * 0.05,
  },
  ptitText: {
    color: '#333',
    fontSize: width * 0.03,
    marginTop: height * 0.005,
  },
});

export default LoginScreen;