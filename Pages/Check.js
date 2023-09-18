import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Check({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter verification code"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.Resend}>Resend in</Text>
        <Text style={styles.time}>00:30</Text>
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            navigation.navigate('CreatePassword');
          }}
        >
          <Text style={styles.buttonText}>Verify</Text>
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
      checkButton: {
        width: 295.84,
        height: 50.45,
        backgroundColor: "#BCA464",
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 350
      },
      buttonText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        
      },
});
