import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, typography, radius } from '../../theme';

export default function TipCard({ imagem, titulo }) {
    return (
        <TouchableOpacity style = {styles.card}>
            <Image source = {imagem} style = {styles.image}/>
            <View style = {styles.textContainer}>
                <Text style = {styles.title} numberOfLines = {2}>
                    {titulo}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 160, // Largura fixa para caberem dois na tela e dar o efeito de carrossel
        backgroundColor: colors.white,
        borderRadius: radius.md,
        marginRight: spacing.md,
        overflow: 'hidden', // Garante que a imagem respeite as bordas arredondadas do cartão
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    image: {
        width: '100%',
        height: 100,
        backgroundColor: colors.primaryLight,
    },
    textContainer: {
        padding: spacing.sm,
        minHeight: 60,
        justifyContent: 'center',
    },
    title: {
        ...typography.caption,
        color: colors.textPrimary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});