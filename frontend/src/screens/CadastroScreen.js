import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
    Alert,
} from 'react-native';

// Importando o nosso rema e contexto
import { colors, spacing, typography } from '../theme';
import { useAuth } from "../contexts/AuthContext";

// Nossos componentes
import CustomInput from "../components/CustomInput";
import PrimaryButton from "../components/PrimaryButton";

export default function CadastroScreen({ navigation }) {
    const { register, carregando, erro } = useAuth();

    // Estados do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleCadastro = async () => {
        // 1. Validação básica de frontend
        if (!nome || !email || !senha ) {
            Alert.alert("Por favor, preencha todos os campos!");
            return;
        }

        // 2. Chama a função do AuthContext (Que vai batere no backend)
        const sucesso = await register(nome, email, senha );

        // 3. Se o backend retornar sucesso (201), navega para a Login
        if (sucesso) {
            Alert.alert(
                "Conta Criada !",
                "Sua conta foi criada com sucesso. Faça o login para continuar.",
                [
                    {
                        text: "OK",
                        // A navegação só acontece DEPOIS que você clica no botão OK do alerta!
                        onPress: () => navigation.navigate('Login')
                    }
                ]
            )
        }
    };

    return (
        <KeyboardAvoidingView
            style = {styles.container}
            behavior = {Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle = {styles.scroll} keyboardShouldPersistTaps = "handled">

                {/* Hero - Fundo verde com a logo */}
                <View style = {styles.hero}>
                    <Image
                        source = {require('../components/logos/logo_branco.png')}
                        style = {styles.logo}
                        resizeMode = "contain"
                    />
                    <Text style = {styles.tagline}>
                        Reciclagem, informações e {'\n'} sustentabilidade para Fortaleza
                    </Text>
                </View>

                {/* Card do formulário */}
                <View style = {styles.card}>
                    <Text style = {styles.cardTitle}>Seja bem-vindo</Text>
                    <Text style = {styles.cardSubtitle}>
                        Crie sua conta para ajudar a contribuir com a cidade
                    </Text>

                    {/* Inputis usando o design System */}
                    <CustomInput
                        label = "Nome"
                        placeholder = 'Digite seu nome completo'
                        value = {nome}
                        onChangeText = {setNome}
                    />

                    <CustomInput
                        label = "E-mail"
                        placeholder = 'seu_email@gmail.com'
                        value = {email}
                        onChangeText = {setEmail}
                    />

                    {/* Input de Senha com o Olhinho */}
                    <View style = {styles.passwordWrapper}>
                        <CustomInput
                            label = "Senha"
                            placeholder = "Crie uma senha forte"
                            secureTextEntry = {!mostrarSenha}
                            value = {senha}
                            onChangeText = {setSenha}
                        />
                        <TouchableOpacity
                            style = {styles.eyeBtn}
                            onPress = {() => setMostrarSenha((v) => !v)}
                        >
                            <Text style={styles.eyeIcon}>{mostrarSenha ? '🙉' : '🙈'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Exibição de Erro do backend */}
                    {erro ? <Text style = {styles.erroText}>{erro}</Text> : null}
                    
                    {/* Botão Principal */}
                    <PrimaryButton
                        title = {carregando ? "Criando conta..." : "Criar"}
                        onPress = {handleCadastro}
                        style = {carregando ? { opacity: 0.7, marginTop: spacing.md } : { marginTop: spacing.md}}
                    />

                    {/* Link para voltar ao Login */}
                    <View style = {styles.loginRow}>
                        <Text style = {styles.loginText}>Já tem uma conta? </Text>
                        <TouchableOpacity
                            onPress = {() => navigation.navigate('Login')}
                        >
                            <Text style = {styles.loginLink}>Fazer Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

// Os estilos são praticamente os mesmos da tela de Login
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.primary,
    },
    scroll: {
        flexGrow : 1,
    },

    // hero
    hero: {
        backgroundColor : colors.primary,
        paddingTop : 80,
        paddingBottom : 60,
        alignItems : 'center',
        gap : spacing.sm,
    },
    logo : {
        width : 200,
        height : 100,
        marginBottom : spacing.xs,
    },
    tagline : {
        ...typography.body,
        color : colors.primaryLight,
        textAlign : 'center',
        lineHeight : 20,
    },

    //card
    card : {
        backgroundColor: colors.white,
        borderTopLeftRadius : 40,
        borderTopRightRadius : 40,
        marginTop : -30,
        flex : 1,
        paddingHorizontal : spacing.xl,
        paddingTop : spacing.xl,
        paddingBottom : spacing.xl,
        elevation : 10,
        shadowColor : '#000',
        shadowOffset : { width: 0, height: -3 },
        shadowOpacity : 0.1,
        shadowRadius : 10,
    },
    cardTitle : {
        ...typography.h1,
        fontSize : 28,
        color : colors.primary,
        marginBottom : spacing.xs,
    },
    cardSubtitle: { // CORRIGIDO: Este estilo estava faltando!
        ...typography.body,
        color: colors.textSecondary,
        marginBottom: spacing.lg,
        lineHeight: 20,
    },
    
    // Wrapper para posicionar o olhinho corretamente em cima do CustomInput
    passwordWrapper : {
        position : "relative",
    },
    eyeBtn : {
        position: 'absolute',
        right: 15,
        top: 29, // Ajuste para ficar alinhado com a caixa de texto (Abaixo do label)
        padding: 5,
    },
    eyeIcon : {
        fontSize : 18,
    },

    // erro
    erroText : {
        ...typography.caption,
        color : colors.error,
        marginBottom : spacing.sm,
        textAlign : 'center',
    },

    // Login
    loginRow : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginTop : spacing.xl,
    },
    loginText : {
        ...typography.body,
        color : colors.textSecondary,
    },
    loginLink : {
        ...typography.body,
        color : colors.primary,
        fontWeight : 'bold',
    },
});