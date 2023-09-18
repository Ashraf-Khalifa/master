import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Handle the search logic here with the value of searchText
    // You can use this function to navigate to the search results screen or perform any other action.
    // For now, let's just log the search text.
    console.log(`Searching for: ${searchText}`);
  };

  const handleNavigateToNewPage = () => {
    // Navigate to the new page when the button is clicked
    // Replace 'NewPage' with the name of the screen you want to navigate to
    navigation.navigate("NewPage");
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Icon Buttons Row */}
      <View style={styles.container1}>
        {/* Icon Grid */}
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/needle.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Handmade</Text>
          </TouchableOpacity>
          {/* Repeat this TouchableOpacity block for all your icons */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/ads.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Mug </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/discount.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Discount </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/image.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Panels </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/t-shirt.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>T-shirt </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/tote-bag.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Bags </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/smartphones.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Mobile Cover </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/earrings.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Accessories </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToNewPage}
          >
            {/* Use the Image component to display your icon */}
            <Image
              source={require("../assets/perfume.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Perfumes </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 0,
    marginTop: 20,
    width: "70%",
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: "white",
  },
  searchButton: {
    backgroundColor: "#00A4FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%", // Adjust the width of the grid as needed
    height: "50%",
    marginTop: 0,
    paddingLeft: 25,
  },
  iconButton: {
    backgroundColor: "#BCA464",
    borderRadius: 10,
    width: "30%", // Each icon button should take 30% of the grid width for 3 columns
    height: 160, // Set your desired height
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    marginBottom: 50, // Add spacing between rows
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconImage: {
    width: 100, // Set your desired width
    height: 100, // Set your desired height
    resizeMode: "contain", // Adjust the resizeMode as needed
    tintColor: "white",
  },
  iconText: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
});
