import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors, typography, spacing } from '../../theme';

export default function SectionTitle({ title, style }) {
    return (
        <Text style = {[styles.title, style]}>
            {title}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        ...typography.h2,
        color: colors.primary,
        fontWeight: 'bold',
        marginTop: spacing.lg,
        marginBottom: spacing.sm,
    }
});