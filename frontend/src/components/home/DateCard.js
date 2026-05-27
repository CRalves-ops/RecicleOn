import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius, typography } from '../../theme'

export default function DateCard({ diaSemana, numeroDia, ativo, onPress }) {
    return (
        <TouchableOpacity
            style = {[styles.card, ativo && styles.cardAtivo]}
            onPress = {onPress}
        >
            <Text style = {[styles.diaSemana, ativo && styles.textoAtivo]}>
                {diaSemana}
            </Text>
            <Text style = {[styles.numeroDia, ativo && styles.textoAtivo]}>
                {numeroDia}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 60,
        height: 70,
        backgroundColor: #e4dfdf, // Cinza claro padrão
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },
    cardAtivo: {
        backgroundColor: colors.primary, // Fica verde quando selecionado
    },
    diaSemana: {
        ...typography.caption,
        color: colors.textSecondary,
        marginBottom: 4,
    },
    numeroDia: {
        ...typography.h2,
        color: colors.textPrimary,
    },
    textoAtivo: {
        color: colors.white, // O texto fica branco se o fundo for verde
    }
});