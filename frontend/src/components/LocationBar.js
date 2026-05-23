import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons'; // Biblioteca de ícones do Expo
import { colors, spacing, radius, typography } from "../theme";

export default function LocationBar({ location = "localização"}) {
    return (
        <View style = {styles.container}>
            <Feather name = "map-pin" size = {20} color = {colors.primary}/>
            <Text style = {styles.text}>{location}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primaryLight,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: radius.full,
        width: '100%',
        marginBottom: spacing.md,
    },
    text: {
        ...typography.body,
        color: colors.primaryDark,
        marginLeft: spacing.sm,
        fontWeight: '500',
    },
});