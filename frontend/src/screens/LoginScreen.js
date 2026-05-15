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
    Image,
} from 'react-native';

// Importando nosso tema base
import { colors, spacing, radius, typography } from '../theme';
import { useAuth } from '../contexts/AuthContext';


// Importando nossos Componentes do Design System
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

export default function LoginScreen({ navigation }) {
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

                {/* Hero  - Fundo Verde com a logo */}
                <View style={styles.hero}>
                    <Image
                        source = {require('../components/logos/logo_branco.png')}
                        style = {styles.logo}
                        resizeMode = "contain"
                    />
                    <Text style = {styles.tagline}>
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
                    <CustomInput
                        label = "E-mail"
                        placeholder = "seu_email@gmail.com"
                        value = {email}
                        onChangeText = {setEmail}
                    />

                    {/* Senha */}
                    <View style = {styles.passwordWrapper}>
                        <CustomInput
                            label = "Senha"
                            placeholder = "········"
                            secureTextEntry = {!mostrarSenha}
                            value = {senha}
                            onChangeText = {setSenha}
                        />
                        <TouchableOpacity
                            style = {styles.eyeBtn}
                            onPress = {() => setMostrarSenha((v) => !v)}
                        >
                            <Text style = {styles.eyeIcon}>{mostrarSenha ? '🙉' : '🙈'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Esqueceu a senha */}
                    <TouchableOpacity style = {styles.forgotWrapper}>
                        <Text style = {styles.forgotText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    {/* Erro */}
                    {erro ? <Text style = {styles.erroText}>{erro}</Text> : null}

                    {/* Botão Entrar */}
                    <PrimaryButton
                        title = {carregando ? "Carregando..." : "Entrar"}
                        onPress = {handleLogin}
                        // Passamos uma opacidade menor caso esteja carregando
                        style = {carregando ? { opacity: 0.7 } : {}}
                    />

                    {/* cadastro */}
                    <View style = {styles.signupRow}>
                        <Text style = {styles.signupText}>Não tem conta?</Text>
                        <TouchableOpacity onPress = {() => navigation.navigate('Cadastro')}>
                            <Text style = {styles.signupLink}> Criar conta</Text>
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
        backgroundColor: colors.primary,
    },
    scroll: {
        flexGrow: 1,
    },

    // Hero
    hero: {
        backgroundColor: colors.primary,
        paddingTop: 80,
        paddingBottom: 60,
        alignItems: 'center',
        gap: spacing.sm,
    },
    logo: {
        width: 200,
        height: 100,
        marginBottom: spacing.xs,
    },
    tagline: {
        ...typography.body,
        color: colors.primaryLight,
        textAlign: 'center',
        lineHeight: 20,
    },
    // Card
    card: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -30,
        flex: 1,
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl,
        paddingBottom: spacing.xl,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    cardTitle: {
        ...typography.h1,
        fontSize : 28,
        color: colors.primary,
        marginBottom: spacing.xs, 
    },
    cardSubtitle : {
        ...typography.body,
        color : colors.textSecondary,
        marginBottom: spacing.lg,
        lineHeight: 20,
    },

    // Wrapper para posicionar o olhinho corretamente em cima do CustomInput
    passwordWrapper: {
        position : 'relative'
    },
    eyeBtn: {
        position: 'absolute',
        right: 15,
        top: 29, // Ajuste para ficar alinhado com a caixa de texto (Abaixo do label)
        padding: 5,
    },
    eyeIcon: {
        fontSize: 18,
    },

    // Esqueceu a senha
    forgotWrapper: {
        alignSelf: 'flex-end',
        marginTop: -10,
        marginBottom: spacing.lg,
    },
    forgotText: {
        ...typography.caption,
        color: colors.primaryDark,
        fontWeight: '600',
    },
    // Erro
    erroText: {
        ...typography.caption,
        color: colors.error,
        marginBottom: spacing.sm,
        textAlign: 'center',
    },
    // Cadastro
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: spacing.xl,
    },
    signupText: {
        ...typography.body,
        color: colors.textSecondary,
    },
    signupLink: {
        ...typography.body,
        color: colors.primary,
        fontWeight: 'bold',
    },
});