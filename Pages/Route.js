import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './FirstPage';
import Second from './Second';
import Third from './Third';
import Login from './Login';
import Check from './Check';
import SendCode from './SendCode';
import CreatePassword from './CreatePassword';
import PrivacyPolicy from './PrivacyPolicy';
import Successfully from './Successfully';
import EditProfile from './EditProfile';
import Home from './Home';


const Stack = createNativeStackNavigator()
const Route = () => {
    return (
       <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name = 'FirstPage' component={FirstPage} options={{ headerShown: false }}/>
        <Stack.Screen name = 'Second' component={Second} options={{ headerShown: false }}/>
        <Stack.Screen name = 'Third' component={Third} options={{ headerShown: false }}/>
        <Stack.Screen name = 'Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name = 'Check' component={Check} options={{ headerShown: false }}/>
        <Stack.Screen name = 'SendCode' component={SendCode} options={{ headerShown: false }}/>
        <Stack.Screen name = 'CreatePassword' component={CreatePassword} options={{ headerShown: false }}/>
        <Stack.Screen name = 'PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false }}/>
        <Stack.Screen name = 'Successfully' component={Successfully} options={{ headerShown: false }}/>
        <Stack.Screen name = 'EditProfile' component={EditProfile} options={{ headerShown: false }}/>
        <Stack.Screen name = 'Home' component={Home} options={{ headerShown: false }}/>

       </Stack.Navigator>
       </NavigationContainer>
    );
}

export default Route;
