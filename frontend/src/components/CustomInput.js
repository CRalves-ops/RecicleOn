import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, typography, spacing, radius } from '../theme';

export default function CustomInput({ label, placeholder, value, onChangeText, secureTextEntry }) {
    return (
        <View style = {styles.container}>

            {/* Rótulo acima do input (ex: "E-mail") */}
            {label && <Text style = {styles.label}>{label}</Text>}

            {/* Caixa de texto com fundo verde claro */}
            <TextInput
                style = {styles.input}
                placeholder = {placeholder}
                placeholderTextColor = {colors.textMuted}
                value = {value}
                onChangeText = {onChangeText}
                secureTextEntry = {secureTextEntry} // Para esconder a senha
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: spacing.md,
    },
    label: {
        ...typography.h3,
        color: colors.primary, // Títulos dos inputs em verde
        marginBottom: spacing.xs,
        frontWeight: '600',
    },
    input: {
        backgroundColor: colors.primaryLight, // Fundo verde clarinho do Figma
        borderRadius: radius.md,
        paddingHorizontal: spacing.sm + 4, // Ajuste para ficar gordinho
        ...typography.body,
        color: colors.textPrimary,
    }
});