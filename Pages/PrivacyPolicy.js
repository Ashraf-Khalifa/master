import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


export default function PrivacyPolicy({ navigation }) {
   
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.policyText}>Privacy Policy</Text>
        <SafeAreaView style={styles.scrollViewContainer}>
          <ScrollView style={styles.scrollView}>
           <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          </ScrollView>
        </SafeAreaView>
        <View style={styles.checkboxContainer}>
        
        <Text style={styles.checkboxText}>I Agree to Privacy Policy</Text>
        </View>
        <TouchableOpacity
         style={styles.checkButton}
         onPress={() => {
           navigation.navigate('Successfully'); 
         
          }}
        >
          <Text style={styles.buttonText}>Agree</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCA464',
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
    gap: 20,
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: 'center',
  },
  policyText: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: 'center',
  },
  scrollViewContainer: {
    flex: 1,
    marginBottom: 20,
  },
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#BCA464',
    fontStyle: 'DIN Next LT W23',
    lineHeight: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
    
   
  },
  checkButton: {
    width: 295.84,
    height: 50.45,
    backgroundColor: "#BCA464",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  
});