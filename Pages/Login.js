import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
    // navigation.navigate('Check', { email, password });
  };

  const handleCreateAccount = () => {
    // Navigate to the "Check" screen when clicking the text
    navigation.navigate('SendCode');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.Forgot}>Forgot Password?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>Continue using Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Continue using Google</Text>
        </TouchableOpacity>
        {/* Modify this line to handle navigation */}
        <TouchableOpacity
          style={styles.createAccountText}
          onPress={handleCreateAccount}
        >
          <Text>Don’t have an account? Create one here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCA464',
  },
  formContainer: {
    backgroundColor: 'white',
    paddingTop: 90,
    padding: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: '100%',
    height: 798,
    marginTop: 270,
    gap: 13,
  },
  input: {
    height: 60,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  Forgot: {
    color: '#BCA464',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: 'white',
    height: 50,
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#CECECE',
  },
  orText: {
    marginHorizontal: 10,
    color: '#BCA464',
    fontSize: 16,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
    height: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 15,
  },
  facebookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: 'white',
    height: 50,
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 15,
  },
  googleButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountText: {
    color: '#BCA464',
    marginTop: 15,
    fontSize: 17,
    textAlign: 'center', // Center the text
  },
});
