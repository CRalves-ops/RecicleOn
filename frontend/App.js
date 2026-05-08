import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/contexts/AuthContext';
import LoginScreen from './src/screens/LoginScreen';

// Proximas telas que forem criadas seram adicionadas aqui:
// RegisterScreen
// HomeScreen

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <StatusBar style = "light"/>
                <Stack.Navigator screenOptions={{ headerShown : false}}>
                    <Stack.Screen name = "Login" component = {LoginScreen}/>
                    {/* Adiciona as proximas telas aqui */}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}