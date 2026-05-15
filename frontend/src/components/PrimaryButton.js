import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, radius} from '../theme';

export default function PrimaryButton({ title, onPress, style}) {
    return (
        <TouchableOpacity
            style = {[styles.button, style]}
            onPress = {onPress}
            activeOpacity = {0.8}
        >
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        with: '100%',
        paddingVertical: spacing.md,
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.md,
    },
    text: {
        ...typography.h2,
        color: colors.white,
        frontWeight: 'bold',
    }
});