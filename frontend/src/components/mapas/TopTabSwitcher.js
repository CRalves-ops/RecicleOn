import React from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { colors, typography, spacing } from '../../theme';

export default function TopTabSwitcher({ activeTab, setActiveTab }) {
    return (
        <View style = {styles.container}>

            {/* Botão Esquerdo: Pontos de Coleta */}
            <TouchableOpacity onPress = {() => setActiveTab('pontos')}>
                <Text style = {[
                    styles.tabText,
                    activeTab === 'pontos' ? styles.activeText : styles.inactiveText
                ]}>
                    Pontos de coleta
                </Text>
            </TouchableOpacity>

            {/* Linha divisória central */}
            <Text style = {styles.divider}>|</Text>

            {/* Botão Direito: Doações de roupa  */}
            <TouchableOpacity onPress = {() => setActiveTab('doacoes')}>
                <Text style = {[
                    styles.tabText,
                    activeTab === 'doacoes' ? styles.activeText : styles.inactiveText
                ]}>
                    Doações de roupa
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: spacing.md,
    },
    tabText: {
        ...typography.h2,
        fontSize: 18, // Um pouco menor que um Título principal
    },
    activeText: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    inactiveText: {
        color: '#A0A0A0', // Um cinza clarinho para dar efeito de apagado
    },
    divider: {
        fontSize: 20,
        color: '#8d8a8a',
        marginHorizontal: spacing.sm,
        fontWeight: '300',
    }
});