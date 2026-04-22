import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { useAuth } from '../contexts/AuthContext';

export default function LoginScreen({ navigation}) {
    const { login, carregando, erro } = useAuth();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleLogin = async () => {
        const sucesso = await login(email, senha);
        if (sucesso) {
            navigation.replace('Home');
        }
    };

    return (
        <KeyboardAvoidingView
            style = {styles.container}
            behavior = {Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

                {/* Hero */}
                <View style={styles.hero}>
                    <View style={styles.logoCircle}>
                        {/* Substituir por <Image source={require('../assets/logo.png')} /> quando tiver a logo*/}
                        <Text style = {styles.logoText}> ♻ </Text>
                    </View>
                    <Text style={styles.appName}>RecicleON</Text>
                    <Text style={styles.tagline}>
                        Reciclagem, informação e {'\n'} sustentabilidade para Fortaleza
                    </Text>
                </View>

                {/* Card do formulário */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Bem-vindo de volta</Text>
                    <Text style={styles.cardSubtitle}>
                        Entre na sua conta para continuar contribuindo com a cidade
                    </Text>

                    {/* E-mail */}
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder = 'seu_email@gmail.com'
                        placeholderTextColor = {colors.textMuted}
                        keyboardType = 'email-address'
                        autoCapitalize = 'none'
                        value= {email}
                        onChangeText = {setEmail}
                    />

                    {/* Senha */}
                    <Text style = {styles.label}>Senha</Text>
                    <View style = {styles.inputWrapper}>
                        <TextInput
                            style = {[styles.input, styles.inputWithIcon]}
                            placeholder = '········'
                            placeholderTextColor = {colors.textMuted}
                            secureTextEntry = {!mostrarSenha}
                            value = {senha}
                            onChangeText = {setSenha}
                        />
                        <TouchableOpacity
                            style = {styles.eyeBtn}
                            onPress = {() => setMostrarSenha((v) => !v)}
                        >
                            <Text style = {styles.eyeIcon}>{mostrarSenha ? '🙈' : '🙉'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Esqueceu a senha */}
                    <TouchableOpacity style = {styles.forgotWrapper}>
                        <Text style = {styles.forgotText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    {/* Erro */}
                    {erro ? <Text style = {styles.erroText}>{erro}</Text> : null}

                    {/* Botão Entrar */}
                    <TouchableOpacity
                        style = {[styles.btnPrimary, carregando && styles.btnDisabled]}
                        onPress = {handleLogin}
                        disabled = {carregando}
                    >
                        {carregando ? (
                            <ActivityIndicator color = {colors.white} />
                        ) : (
                            <Text style = {styles.btnPrimaryText}>Entrar</Text>
                        )}
                    </TouchableOpacity>

                    {/* cadastro */}
                    <View style = {styles.signupRow}>
                        <Text style = {styles.signupText}>Não tem conta ?</Text>
                        <TouchableOpacity onPress = {() => navigation.navigate('register')}>
                            <Text style = {styles.signupLink}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scroll: {
        flexGrow: 1,
    },

    // Hero
    hero: {
        backgroundColor: colors.primaryDark,
        paddingTop: 60,
        paddingBottom: 48,
        alignItems: 'center',
        gap: spacing.sm,
    },
    logoCircle: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: 'rgba(225,255,255,0.18)',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.35)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.xs,
    },
    logoText: {
        fontSize: 32,
    },
    appName: {
        ...typography.body,
        color: colors.white,
    },
    tagline: {
        ...typography.body,
        color: 'rgba(255,255,255,0.78)',
        textAlign: 'center',
        lineHeight: 20,
    },

    //card
    card: {
        backgroundColor: colors.white,
        borderTopLeftRadius: radius.xl,
        borderTopRightRadius: radius.xl,
        marginTop: -20,
        flex: 1,
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl,
        paddingBottom: spacing.xl,
    },
    cardTitle: {
        ...typography.h2,
        color: colors.primaryDeep,
        marginBottom: spacing.xs, 
    },
    cardSubtitle : {
        ...typography.body,
        color : colors.textSecondary,
        marginBottom: spacing.lg,
        lineHeight: 20,
    },

    // Inputs
    label: {
    ...typography.label,
    color: colors.primaryDark,
    marginBottom: 6,
    },
    input: {
        height: 48,
        backgroundColor: colors.inputBg,
        borderWidth: 1,
        borderColor: colors.primaryBorder,
        borderRadius: radius.md,
        paddingHorizontal: spacing.md,
        ...typography.body,
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },
    inputWrapper: {
        position: 'relative',
    },
    inputWithIcon: {
        paddingRight: 44,
    },
    eyeBtn: {
        position: 'absolute',
        right: 12,
        top: 12,
    },
    eyeIcon: {
        fontSize: 16,
    },
    
    // Esqueceu a senha
    forgotWrapper: {
        alignSelf: 'flex-end',
        marginTop: -spacing.sm,
        marginBottom: spacing.md,
    },
    forgotText: {
        ...typography.caption,
        color: colors.primary,
        fontWeight: '500',
    },
    
    // Erro
    erroText: {
        ...typography.caption,
        color: colors.error,
        marginBottom: spacing.sm,
        textAlign: 'center',
    },
    
    // Botão primário
    btnPrimary: {
        height: 52,
        backgroundColor: colors.actionBlue,
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacing.xs,
    },
    btnDisabled: {
        opacity: 0.7,
    },
    btnPrimaryText: {
        ...typography.h3,
        color: colors.white,
    },
    
    // Cadastro
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: spacing.lg,
    },
    signupText: {
        ...typography.body,
        color: colors.textSecondary,
    },
    signupLink: {
        ...typography.body,
        color: colors.primary,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
});