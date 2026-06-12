import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Importando as nosssas telas (subindo uma pasta e entrando em screens)
import HomeScreen from '../screens/HomeScreen';
import MapaScreen from '../screens/MapaScreen';
import PerfilScreen from '../screens/PerfilScreen';

// Importando o tema
import { colors } from '../theme';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator 
            screenOptions= {{
                headerShown: false, // Esconde o cabeçalho padrão, poís já temos o nosso HeaderLogo
                tabBarShowLabel: false, // Esconde os textos dos ícones para ficar igual ao Figma
                tabBarStyle: {
                    backgroundColor: colors.primary, // Barra com fundo verde
                    borderTopWidth: 0,
                    height: 60, // Altura confortável para clicar
                },
                tabBarActiveTintColor: colors.white, // ícone branco quando selecionado
                tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)', // Ícone meio transparente quando inativo
            }}
        >
            {/* Aba 1: Mapas (Ícone de Mapa) */}
            <Tab.Screen
                name = "Mapas"
                component= {MapaScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name = 'map' size = {size} color = {color} />
                    ),
                }}
            />

            {/* Aba 2: Calendário/Home (Ícon de Calendário) */}
            <Tab.Screen
                name = "Home"
                component= {HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name = "calendar" size = {size} color = {color} />
                    ),
                }}
            />

            {/* Aba 3: Perfil (Ícone de Usuário) */}
            <Tab.Screen
                name = "Perfil"
                component = {PerfilScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name = "user" size = {size} color = {color} />
                    ),
                }}
            />  
        </Tab.Navigator>
    );
}