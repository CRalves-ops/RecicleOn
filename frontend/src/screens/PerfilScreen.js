import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Biblioteca de ícones padrão do Expo

// O tema do seu projeto
import { colors, radius } from '../theme';

export default function PerfilScreen() {
    return (
        <View style={styles.safeArea}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                
                {/* --- SEÇÃO DO CABEÇALHO DO PERFIL --- */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarCircle}>
                        <FontAwesome5 name="user-alt" size={48} color={colors.white} />
                    </View>
                    
                    <Text style={styles.userName}>Fulano da Silva</Text>
                    
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Editar perfil</Text>
                    </TouchableOpacity>
                </View>

                {/* --- SEÇÃO DE DICAS DE RECICLAGEM --- */}
                <View style={styles.tipsContainer}>
                    <Text style={styles.tipsTitle}>Dicas de reciclagem</Text>

                    {/* Lixeira Azul */}
                    <View style={styles.tipItem}>
                        <View style={[styles.colorDot, { backgroundColor: '#2196F3' }]} />
                        <View style={styles.tipTextContainer}>
                            <Text style={styles.tipTitle}>Azul: Papel e Papelão</Text>
                            <Text style={styles.tipDescription}>
                                <Text style={styles.boldText}>O que colocar: </Text> 
                                Jornais, revistas, caixas de papelão, cadernos e embalagens de papel.{"\n"}
                                <Text style={styles.boldText}>Atenção: </Text> 
                                Não coloque papel higiênico, guardanapos sujos ou caixas de pizza engorduradas.
                            </Text>
                        </View>
                    </View>

                    {/* Lixeira Vermelha */}
                    <View style={styles.tipItem}>
                        <View style={[styles.colorDot, { backgroundColor: '#F44336' }]} />
                        <View style={styles.tipTextContainer}>
                            <Text style={styles.tipTitle}>Vermelha: Plástico</Text>
                            <Text style={styles.tipDescription}>
                                <Text style={styles.boldText}>O que colocar: </Text> 
                                Garrafas PET, potes de margarina ou sorvete, sacolas de supermercado, copos descartáveis e embalagens de limpeza.
                            </Text>
                        </View>
                    </View>

                    {/* Lixeira Verde */}
                    <View style={styles.tipItem}>
                        <View style={[styles.colorDot, { backgroundColor: '#4CAF50' }]} />
                        <View style={styles.tipTextContainer}>
                            <Text style={styles.tipTitle}>Verde: Vidro</Text>
                            <Text style={styles.tipDescription}>
                                <Text style={styles.boldText}>O que colocar: </Text> 
                                Garrafas de bebidas, copos de vidro, potes de conserva e frascos de perfume.{"\n"}
                                <Text style={styles.boldText}>Dica de ouro: </Text> 
                                Se o vidro estiver quebrado, embrulhe em jornal ou coloque dentro de uma garrafa PET cortada para não machucar os coletores!
                            </Text>
                        </View>
                    </View>

                    {/* Lixeira Amarela */}
                    <View style={styles.tipItem}>
                        <View style={[styles.colorDot, { backgroundColor: '#FFC107' }]} />
                        <View style={styles.tipTextContainer}>
                            <Text style={styles.tipTitle}>Amarela: Metal</Text>
                            <Text style={styles.tipDescription}>
                                <Text style={styles.boldText}>O que colocar: </Text> 
                                Latas de refrigerante e suco, latas de sardinha, tampinhas de garrafa, panelas velhas e pregos.
                            </Text>
                        </View>
                    </View>

                    {/* Lixeira Marrom (Orgânico) */}
                    <View style={styles.tipItem}>
                        <View style={[styles.colorDot, { backgroundColor: '#795548' }]} />
                        <View style={styles.tipTextContainer}>
                            <Text style={styles.tipTitle}>Marrom: Lixo Orgânico</Text>
                            <Text style={styles.tipDescription}>
                                <Text style={styles.boldText}>O que colocar: </Text> 
                                Restos de comida, cascas de frutas e legumes, borra de café, saquinhos de chá e cascas de ovos. (Ideal para compostagem).
                            </Text>
                        </View>
                    </View>

                    {/* Botão de Sair da Conta (Importante para o fluxo do app) */}
                    <TouchableOpacity style={styles.logoutButton}>
                        <FontAwesome5 name="sign-out-alt" size={16} color="#F44336" style={{ marginRight: 8 }} />
                        <Text style={styles.logoutText}>Sair da conta</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
    },
    // --- ESTILOS DO CABEÇALHO DO PERFIL ---
    profileHeader: {
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 40 : 50,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    avatarCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: colors.primary, // Verde principal do seu app
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        elevation: 4, // Sombreado leve no Android
        shadowColor: '#000', // Sombreado no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.textPrimary || '#333333',
        marginBottom: 8,
    },
    editButton: {
        backgroundColor: '#E8F5E9', // Fundo verde bem clarinho igual ao Figma
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 20, // Formato de pílula
    },
    editButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary,
    },

    // --- ESTILOS DAS DICAS DE RECICLAGEM ---
    tipsContainer: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 40,
    },
    tipsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary, // Título verde
        marginBottom: 20,
    },
    tipItem: {
        flexDirection: 'row', // Coloca a bolinha e o texto lado a lado
        marginBottom: 20,
    },
    colorDot: {
        width: 16,
        height: 16,
        borderRadius: 8, // Deixa perfeitamente redondo
        marginTop: 4, // Alinha com a primeira linha do texto
        marginRight: 12,
    },
    tipTextContainer: {
        flex: 1, // Faz o texto ocupar o resto do espaço e quebrar a linha direitinho
    },
    tipTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.textPrimary || '#333333',
        marginBottom: 4,
    },
    tipDescription: {
        fontSize: 14,
        color: colors.textSecondary || '#666666',
        lineHeight: 20,
    },
    boldText: {
        fontWeight: 'bold',
        color: colors.textPrimary || '#444444',
    },

    // --- ESTILOS DO BOTÃO DE SAIR ---
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#F44336', // Vermelho para indicar ação de saída
        borderRadius: radius.md || 8,
    },
    logoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F44336',
    }
});