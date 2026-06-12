import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function MapaScreen() {
    return (
        <View style = {styles.container} >
            <Text>
                tela de Mapas e Pontos de Coleta
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    }
});