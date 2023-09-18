import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const countriesWithCodes = [
  { name: "Afghanistan", dial_code: "+93" },
  { name: "Albania", dial_code: "+355" },
  { name: "Algeria", dial_code: "+213" },
  { name: "Andorra", dial_code: "+376" },
  { name: "Angola", dial_code: "+244" },
  { name: "Antigua and Barbuda", dial_code: "+1-268" },
  { name: "Argentina", dial_code: "+54" },
  { name: "Armenia", dial_code: "+374" },
  { name: "Australia", dial_code: "+61" },
  { name: "Austria", dial_code: "+43" },
  { name: "Azerbaijan", dial_code: "+994" },
  { name: "Bahamas", dial_code: "+1-242" },
  { name: "Bahrain", dial_code: "+973" },
  { name: "Bangladesh", dial_code: "+880" },
  { name: "Barbados", dial_code: "+1-246" },
  { name: "Belarus", dial_code: "+375" },
  { name: "Belgium", dial_code: "+32" },
  { name: "Belize", dial_code: "+501" },
  { name: "Benin", dial_code: "+229" },
  { name: "Bhutan", dial_code: "+975" },
  { name: "Bolivia", dial_code: "+591" },
  { name: "Bosnia and Herzegovina", dial_code: "+387" },
  { name: "Botswana", dial_code: "+267" },
  { name: "Brazil", dial_code: "+55" },
  { name: "Brunei", dial_code: "+673" },
  { name: "Bulgaria", dial_code: "+359" },
  { name: "Burkina Faso", dial_code: "+226" },
  { name: "Burundi", dial_code: "+257" },
  { name: "Cabo Verde", dial_code: "+238" },
  { name: "Cambodia", dial_code: "+855" },
  { name: "Cameroon", dial_code: "+237" },
  { name: "Canada", dial_code: "+1" },
  { name: "Central African Republic", dial_code: "+236" },
  { name: "Chad", dial_code: "+235" },
  { name: "Chile", dial_code: "+56" },
  { name: "China", dial_code: "+86" },
  { name: "Colombia", dial_code: "+57" },
  { name: "Comoros", dial_code: "+269" },
  { name: "Congo, Democratic Republic of the", dial_code: "+243" },
  { name: "Congo, Republic of the", dial_code: "+242" },
  { name: "Costa Rica", dial_code: "+506" },
  { name: "Cote d'Ivoire", dial_code: "+225" },
  { name: "Croatia", dial_code: "+385" },
  { name: "Cuba", dial_code: "+53" },
  { name: "Cyprus", dial_code: "+357" },
  { name: "Czech Republic", dial_code: "+420" },
  { name: "Denmark", dial_code: "+45" },
  { name: "Djibouti", dial_code: "+253" },
  { name: "Dominica", dial_code: "+1-767" },
  { name: "Dominican Republic", dial_code: "+1-809, +1-829, +1-849" },
  { name: "Ecuador", dial_code: "+593" },
  { name: "Egypt", dial_code: "+20" },
  { name: "El Salvador", dial_code: "+503" },
  { name: "Equatorial Guinea", dial_code: "+240" },
  { name: "Eritrea", dial_code: "+291" },
  { name: "Estonia", dial_code: "+372" },
  { name: "Eswatini", dial_code: "+268" },
  { name: "Ethiopia", dial_code: "+251" },
  { name: "Fiji", dial_code: "+679" },
  { name: "Finland", dial_code: "+358" },
  { name: "France", dial_code: "+33" },
  { name: "Gabon", dial_code: "+241" },
  { name: "Gambia", dial_code: "+220" },
  { name: "Georgia", dial_code: "+995" },
  { name: "Germany", dial_code: "+49" },
  { name: "Ghana", dial_code: "+233" },
  { name: "Greece", dial_code: "+30" },
  { name: "Grenada", dial_code: "+1-473" },
  { name: "Guatemala", dial_code: "+502" },
  { name: "Guinea", dial_code: "+224" },
  { name: "Guinea-Bissau", dial_code: "+245" },
  { name: "Guyana", dial_code: "+592" },
  { name: "Haiti", dial_code: "+509" },
  { name: "Honduras", dial_code: "+504" },
  { name: "Hungary", dial_code: "+36" },
  { name: "Iceland", dial_code: "+354" },
  { name: "India", dial_code: "+91" },
  { name: "Indonesia", dial_code: "+62" },
  { name: "Iran", dial_code: "+98" },
  { name: "Iraq", dial_code: "+964" },
  { name: "Ireland", dial_code: "+353" },
  { name: "Italy", dial_code: "+39" },
  { name: "Jamaica", dial_code: "+1-876" },
  { name: "Japan", dial_code: "+81" },
  { name: "Jordan", dial_code: "+962" },
  { name: "Kazakhstan", dial_code: "+7" },
  { name: "Kenya", dial_code: "+254" },
  { name: "Kiribati", dial_code: "+686" },
  { name: "Korea, North", dial_code: "+850" },
  { name: "Korea, South", dial_code: "+82" },
  { name: "Kosovo", dial_code: "+383" },
  { name: "Kuwait", dial_code: "+965" },
  { name: "Kyrgyzstan", dial_code: "+996" },
  { name: "Laos", dial_code: "+856" },
  { name: "Latvia", dial_code: "+371" },
  { name: "Lebanon", dial_code: "+961" },
  { name: "Lesotho", dial_code: "+266" },
  { name: "Liberia", dial_code: "+231" },
  { name: "Libya", dial_code: "+218" },
  { name: "Liechtenstein", dial_code: "+423" },
  { name: "Lithuania", dial_code: "+370" },
  { name: "Luxembourg", dial_code: "+352" },
  { name: "Madagascar", dial_code: "+261" },
  { name: "Malawi", dial_code: "+265" },
  { name: "Malaysia", dial_code: "+60" },
  { name: "Maldives", dial_code: "+960" },
  { name: "Mali", dial_code: "+223" },
  { name: "Malta", dial_code: "+356" },
  { name: "Marshall Islands", dial_code: "+692" },
  { name: "Mauritania", dial_code: "+222" },
  { name: "Mauritius", dial_code: "+230" },
  { name: "Mexico", dial_code: "+52" },
  { name: "Micronesia", dial_code: "+691" },
  { name: "Moldova", dial_code: "+373" },
  { name: "Monaco", dial_code: "+377" },
  { name: "Mongolia", dial_code: "+976" },
  { name: "Montenegro", dial_code: "+382" },
  { name: "Morocco", dial_code: "+212" },
  { name: "Mozambique", dial_code: "+258" },
  { name: "Myanmar", dial_code: "+95" },
  { name: "Namibia", dial_code: "+264" },
  { name: "Nauru", dial_code: "+674" },
  { name: "Nepal", dial_code: "+977" },
  { name: "Netherlands", dial_code: "+31" },
  { name: "New Zealand", dial_code: "+64" },
  { name: "Nicaragua", dial_code: "+505" },
  { name: "Niger", dial_code: "+227" },
  { name: "Nigeria", dial_code: "+234" },
  { name: "North Macedonia", dial_code: "+389" },
  { name: "Norway", dial_code: "+47" },
  { name: "Oman", dial_code: "+968" },
  { name: "Pakistan", dial_code: "+92" },
  { name: "Palau", dial_code: "+680" },
  { name: "Palestine", dial_code: "+970" },
  { name: "Panama", dial_code: "+507" },
  { name: "Papua New Guinea", dial_code: "+675" },
  { name: "Paraguay", dial_code: "+595" },
  { name: "Peru", dial_code: "+51" },
  { name: "Philippines", dial_code: "+63" },
  { name: "Poland", dial_code: "+48" },
  { name: "Portugal", dial_code: "+351" },
  { name: "Qatar", dial_code: "+974" },
  { name: "Romania", dial_code: "+40" },
  { name: "Russia", dial_code: "+7" },
  { name: "Rwanda", dial_code: "+250" },
  { name: "Saint Kitts and Nevis", dial_code: "+1-869" },
  { name: "Saint Lucia", dial_code: "+1-758" },
  { name: "Saint Vincent and the Grenadines", dial_code: "+1-784" },
  { name: "Samoa", dial_code: "+685" },
  { name: "San Marino", dial_code: "+378" },
  { name: "Sao Tome and Principe", dial_code: "+239" },
  { name: "Saudi Arabia", dial_code: "+966" },
  { name: "Senegal", dial_code: "+221" },
  { name: "Serbia", dial_code: "+381" },
  { name: "Seychelles", dial_code: "+248" },
  { name: "Sierra Leone", dial_code: "+232" },
  { name: "Singapore", dial_code: "+65" },
  { name: "Slovakia", dial_code: "+421" },
  { name: "Slovenia", dial_code: "+386" },
  { name: "Solomon Islands", dial_code: "+677" },
  { name: "Somalia", dial_code: "+252" },
  { name: "South Africa", dial_code: "+27" },
  { name: "South Sudan", dial_code: "+211" },
  { name: "Spain", dial_code: "+34" },
  { name: "Sri Lanka", dial_code: "+94" },
  { name: "Sudan", dial_code: "+249" },
  { name: "Suriname", dial_code: "+597" },
  { name: "Sweden", dial_code: "+46" },
  { name: "Switzerland", dial_code: "+41" },
  { name: "Syria", dial_code: "+963" },
  { name: "Taiwan", dial_code: "+886" },
  { name: "Tajikistan", dial_code: "+992" },
  { name: "Tanzania", dial_code: "+255" },
  { name: "Thailand", dial_code: "+66" },
  { name: "Timor-Leste", dial_code: "+670" },
  { name: "Togo", dial_code: "+228" },
  { name: "Tonga", dial_code: "+676" },
  { name: "Trinidad and Tobago", dial_code: "+1-868" },
  { name: "Tunisia", dial_code: "+216" },
  { name: "Turkey", dial_code: "+90" },
  { name: "Turkmenistan", dial_code: "+993" },
  { name: "Tuvalu", dial_code: "+688" },
  { name: "Uganda", dial_code: "+256" },
  { name: "Ukraine", dial_code: "+380" },
  { name: "United Arab Emirates", dial_code: "+971" },
  { name: "United Kingdom", dial_code: "+44" },
  { name: "United States", dial_code: "+1" },
  { name: "Uruguay", dial_code: "+598" },
  { name: "Uzbekistan", dial_code: "+998" },
  { name: "Vanuatu", dial_code: "+678" },
  { name: "Vatican City", dial_code: "+379" },
  { name: "Venezuela", dial_code: "+58" },
  { name: "Vietnam", dial_code: "+84" },
  { name: "Yemen", dial_code: "+967" },
  { name: "Zambia", dial_code: "+260" },
  { name: "Zimbabwe", dial_code: "+263" },
  // Add more countries here
];

export default function EditProfile({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isCountryListVisible, setIsCountryListVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isGenderOptionsVisible, setIsGenderOptionsVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  function handleNumericInput(text, setterFunction) {
    const numericValue = text.replace(/[^0-9]/g, "");
    setterFunction(numericValue);
  }

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setIsCountryListVisible(false);
  };

  const handleGenderInputClick = () => {
    setIsGenderOptionsVisible(!isGenderOptionsVisible);
  };

  const handleGenderOptionClick = (gender) => {
    setSelectedGender(gender);
    setIsGenderOptionsVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsCountryListVisible(false)}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Full Name" />
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.input, styles.countryInput]}
              onPress={() => setIsCountryListVisible(!isCountryListVisible)}
            >
              <Text>
                {selectedCountry
                  ? `${selectedCountry.name} ${selectedCountry.dial_code}`
                  : "Select Country"}
              </Text>
            </TouchableOpacity>
            <TextInput
              style={[styles.input, styles.phoneInput]}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={(text) => handleNumericInput(text, setPhoneNumber)}
            />
          </View>
          <TouchableOpacity
            style={[styles.input, styles.genderInput]}
            onPress={handleGenderInputClick}
          >
            <Text>{selectedGender ? selectedGender : "Select Gender"}</Text>
          </TouchableOpacity>
          {isGenderOptionsVisible && (
            <View style={styles.genderOptions}>
              <TouchableOpacity
                style={styles.genderOption}
                onPress={() => handleGenderOptionClick("Male")}
              >
                <Text>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.genderOption}
                onPress={() => handleGenderOptionClick("Female")}
              >
                <Text>Female</Text>
              </TouchableOpacity>
            </View>
          )}
          <TextInput style={styles.input} placeholder="Nationality" />
          <TextInput style={styles.input} placeholder="Cities" />
          <TextInput style={styles.input} placeholder="Password" />
          <TextInput style={styles.input} placeholder="Confirm Password" />

          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        {isCountryListVisible && (
          <ScrollView style={styles.countryList}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Country"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {countriesWithCodes
              .filter((country) =>
                country.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((country) => (
                <TouchableOpacity
                  key={country.name}
                  style={styles.countryItem}
                  onPress={() => handleCountrySelection(country)}
                >
                  <Text>{`${country.name} ${country.dial_code}`}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCA464",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  formContainer: {
    backgroundColor: "white",
    paddingTop: 90,
    padding: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "100%",
    height: 798,
    marginTop: 270,
  },
  input: {
    height: 60,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  countryInput: {
    flex: 1,
    marginRight: 5,
    justifyContent: "center",
  },
  phoneInput: {
    flex: 2,
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 5,
  },
  checkButton: {
    width: 295.84,
    height: 50.45,
    backgroundColor: "#BCA464",
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  countryList: {
    position: "absolute",
    top: 500,
    maxHeight: 200,
    width: "80%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    backgroundColor: "white",
    zIndex: 1,
  },
  countryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    width: "100%",
    alignItems: "flex-start",
  },
  searchInput: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  genderInput: {
    height: 60,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  genderOptions: {
    position: "absolute",
    top: 310, // Adjust the top position as needed
    maxHeight: 200,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    backgroundColor: "white",
    zIndex: 1,
    marginLeft: 50,
  },
  genderOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    width: "100%",
    alignItems: "flex-start",
  },
  textHeader: {
    fontSize: 36,
    marginVertical: 60,
    color: "#111",
  },
  textSubHeader: {
    fontSize: 25,
    color: "#111",
  },
  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#222",
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: "center",
    marginTop: -10,
  },
  submitBtn: {
    backgroundColor: "#342342",
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
