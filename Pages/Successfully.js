import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
export default function Successfully({ navigation }) {
   
  return (
    <View style={styles.container}>
    <View style={styles.formContainer}>
   <Text style={styles.text1}>
   Your password has been
   </Text>
   <Text style={styles.text2}>
   successfully changed!
   </Text>

        <TouchableOpacity
  style={styles.checkButton}
  onPress={() => {
    navigation.navigate('EditProfile'); 
  }}
>
  <Text style={styles.buttonText}>Done</Text>
</TouchableOpacity>
          
       </View>
    </View>
  )
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
    
    },
    text1:{
        fontSize: 24,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 100
    },
    text2:{
        fontSize: 24,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        
    },
      checkButton: {
        width: 295.84,
        height: 50.45,
        backgroundColor: "#BCA464",
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 250
      },
      buttonText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        
      },
});
