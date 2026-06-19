import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Nossos componentes globais
import HeaderLogo from '../components/globais/HeaderLogo';
import LocationBar from '../components/globais/LocationBar';

// O tema
import { colors, spacing, typography, radius } from '../theme';

export default function MapasScreen() {
    // Estado para controlar qual aba está ativa ('coleta' ou 'doacao')
    const [abaAtiva, setAbaAtiva] = useState('coleta');

    // Coordenadas iniciais centralizadas em Fortaleza
    const initialRegion = {
        latitude: -3.7327,
        longitude: -38.5270,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <HeaderLogo />

            <View style={styles.content}>
                {/* O Alternador de Abas (Top Tab Switcher) */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity 
                        style={[styles.tabButton, abaAtiva === 'coleta' && styles.tabAtiva]}
                        onPress={() => setAbaAtiva('coleta')}
                    >
                        <Text style={[styles.tabText, abaAtiva === 'coleta' && styles.tabTextAtivo]}>
                            Pontos de coleta
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.tabDivider} />

                    <TouchableOpacity 
                        style={[styles.tabButton, abaAtiva === 'doacao' && styles.tabAtiva]}
                        onPress={() => setAbaAtiva('doacao')}
                    >
                        <Text style={[styles.tabText, abaAtiva === 'doacao' && styles.tabTextAtivo]}>
                            Doações de roupa
                        </Text>
                    </TouchableOpacity>
                </View>

                <LocationBar location="Rua imaginária, número 123" />

                {/* O Mapa Real */}
                <View style={styles.mapContainer}>
                    <MapView 
                        style={styles.map} 
                        initialRegion={initialRegion}
                    >
                        {/* Exemplo de Marcador no mapa */}
                        <Marker 
                            coordinate={{ latitude: -3.7420, longitude: -38.5440 }} // Exemplo próximo ao Ecoponto Jovita Feitosa
                            title="Ecoponto Jovita Feitosa"
                            description="Recebe recicláveis e entulho"
                        />
                    </MapView>
                </View>

                {/* Conteúdo Dinâmico baseado na Aba selecionada */}
                <View style={styles.infoContainer}>
                    {abaAtiva === 'coleta' ? (
                        <>
                            <Text style={styles.sectionTitle}>Horário de funcionamento:</Text>
                            <Text style={styles.sectionText}>
                                <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Segunda a sábado:</Text> de 8 às 12 horas e de 14 às 17 horas.
                            </Text>

                            <Text style={[styles.sectionTitle, { marginTop: spacing.md }]}>Pontos de coleta mais próximos:</Text>
                            <View style={styles.itemBox}>
                                <Text style={styles.itemName}>ECOPONTO JOVITA FEITOSA</Text>
                                <Text style={styles.itemAddress}>Rua General Figueiredo, esquina com a Rua Cruz Saldanha</Text>
                            </View>
                        </>
                    ) : (
                        <>
                            <Text style={styles.sectionTitle}>Locais de doação mais próximos:</Text>
                            <View style={styles.itemBox}>
                                <Text style={styles.itemName}>INSTITUIÇÃO SOLIDÁRIA</Text>
                                <Text style={styles.itemAddress}>Rua da Esperança, número 45</Text>
                                <Text style={styles.itemAddress}>Contato: (85) 91122-3344</Text>
                            </View>
                        </>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.sm,
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.md,
    },
    tabButton: {
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
    },
    tabAtiva: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
    },
    tabText: {
        ...typography.h3,
        color: colors.textSecondary,
    },
    tabTextAtivo: {
        color: colors.primary,
    },
    tabDivider: {
        width: 1,
        height: 20,
        backgroundColor: colors.textSecondary,
        opacity: 0.3,
        marginHorizontal: spacing.sm,
    },
    mapContainer: {
        height: 250,
        width: '100%',
        marginTop: spacing.md,
        borderRadius: radius.lg,
        overflow: 'hidden', 
        borderWidth: 1,
        borderColor: '#e4dfdf',
    },
    map: {
        flex: 1,
    },
    infoContainer: {
        marginTop: spacing.md,
        paddingBottom: spacing.xl,
    },
    sectionTitle: {
        ...typography.h2,
        color: colors.textPrimary,
        marginBottom: 4,
    },
    sectionText: {
        ...typography.body,
        color: colors.textSecondary,
    },
    itemBox: {
        marginTop: spacing.sm,
    },
    itemName: {
        ...typography.body,
        color: colors.primary,
        fontWeight: 'bold',
    },
    itemAddress: {
        ...typography.body,
        color: colors.textSecondary,
    }
});