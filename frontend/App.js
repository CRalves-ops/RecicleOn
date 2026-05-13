import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/contexts/AuthContext';

// Importação das Telas
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

// Placeholder para não dar erro enquanto não criar o arquivo
function CadastroPlaceholder() {
    return null;
}

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <StatusBar style = "light"/>

                <Stack.Navigator
                    initialRouteName = "Splash"
                    screenOptions = {{ headerShown: false}}
                >

                    {/* tela de entrada Splash */}
                    <Stack.Screen name = "Splash" component = {SplashScreen} />

                    {/* Tela de login */}
                    <Stack.Screen name = "Login" component = {LoginScreen} />

                    {/* Proximas telas */}
                    <Stack.Screen name = "Cadastro" component = {CadastroPlaceholder} />
                    
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}