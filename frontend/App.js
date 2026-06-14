import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/contexts/AuthContext';

// Importação das Telas
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';

// Importando nossa barra de navegação
import TabRoutes from './src/routes/TabRoutes';

const Stack = createNativeStackNavigator();


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

                    {/* Tela de Cadastro */}
                    <Stack.Screen name = "Cadastro" component = {CadastroScreen} />
                    
                    {/* Adicionando as rotas Principais */}
                    <Stack.Screen name = "MainTabs" component = {TabRoutes} />   
                                   
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}