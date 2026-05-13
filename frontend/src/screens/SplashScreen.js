import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
// importando o Design System
import { colors, typography, spacing, radius } from "../theme";

export default function SplashScreen({ navigation }) {
    return (
        <SafeAreaView style= {styles.container}>
            <View style = {styles.content}>

                {/* Área da Logo e Título */}
                <View style = {styles.logoContainer}>
                    <Image
                        source = {require('../components/logos/logo_branco.png')}
                        style = {styles.logo}
                        resizeMode = "contain"
                    />
                    <Text style = {styles.subtitle}>Por uma cidade mais limpa</Text>
                </View>

                {/* Área dos Botões */}
                <View style = {styles.buttonContainer}>

                    {/* Botão Entrar (Leva para o Login)*/}
                    <TouchableOpacity
                        style = {styles.buttonEntry}
                        onPress = {() => navigation.navigate('Login')}
                    >
                        <Text style = {styles.buttonEntryText}>Entrar</Text>
                    </TouchableOpacity>

                    {/* Link para o Cadastro (Leva para tela de cadastro)*/}
                    <TouchableOpacity
                        style = {styles.signUpLink}
                        onPress = {() => navigation.navigate('Cadastro')}
                    >
                        <Text style = {styles.signUpLinkText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: spacing.xxl,
        paddingHorizontal: spacing.xl,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 220,
        height: 120,
        marginBottom: spacing.md,
    },
    subtitle: {
        ...typography.body,
        color: colors.primaryLight,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    buttonEntry: {
        backgroundColor: colors.white,
        width: '100%',
        paddingVertical: spacing.md,
        borderRadius: radius.full,
        alignItems: 'center',
        marginBottom: spacing.lg,
        // Sombras para destaque visual
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: radius.sm,
    },
    buttonEntryText: {
    ...typography.h2,
    color: colors.primary,
    },
    signUpLink: {
        padding: spacing.sm,
    },
    signUpLinkText: {
        ...typography.caption,
        color: colors.white,
        textDecorationLine: 'underline',
        fontWeight: '600',
    }
});