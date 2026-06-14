import React from 'react';
import { View, Text, StyleSheet , ScrollView, FlatList} from 'react-native';

// Importando nossos componentes modulares
import HeaderLogo from '../components/globais/HeaderLogo';
import LocationBar from '../components/globais/LocationBar';
import DateCard from '../components/home/DateCard';

// Importando o tema
import { colors, spacing, typography, radius } from '../theme';

export default function HomeScreen() {

    // Simulando os dias do mês (No futuro, isso virá do backend/banco de dados)
    const [diasColeta, setDiasColeta] = useState([
        {id: '1', diaSemana: 'Dom', numero: '19', coleta: false },
        {id: '2', diaSemana: 'Seg', numero: '20', coleta: false },
        {id: '3', diaSemana: 'Ter', numero: '21', coleta: true }, // Dia de coleta
        {id: '4', diaSemana: 'Qua', numero: '22', coleta: false },
        {id: '5', diaSemana: 'Qui', numero: '23', coleta: true }, // Dia de coleta
        {id: '6', diaSemana: 'Sex', numero: '24', coleta: false },
        {id: '7', diaSemana: 'Sáb', numero: '25', coleta: true }, // Dia de coleta
    ]);

    return (
        <ScrollView style = {styles.container} showVerticalScrollIndicator = {false}>
            {/* Componente global de Logo */}
            <HeaderLogo />

            <View style = {styles.content}>
                {/* Títulos */}
                <Text style = {styles.title}>Dias de coleta</Text>
                <Text style = {styles.subtitle}>
                    Informe seu endereço para descobrir quando tem coleta de lixo na sua rua
                </Text>

                {/* Componente global de Localização */}
                <LocationBar location = 'Rua imaginária, número 123'/>

                {/* Área do Calendário */}
                <View style = {styles.calendarBox}>
                    <Text style = {styles.monthTitle}>ABRIL - 2026</Text>

                    {/* Lista Horizontal usando o DateCard */}
                    <FlatList
                        horizontal
                        showVerticalScrollIndicator = {false}
                        data = {diasColeta}
                        keyExtractor = {(item) => item.id}
                        contentContainerStyle = {styles.dateList}
                        renderItem = {({ item }) => (
                            <DateCard
                                diaSemana = {item.diaSemana}
                                numeroDia = {item.numero}
                                ativo = {item.coleta}
                                onPress = {() => console.log(`Clicou no dia ${item.numero}`)}
                            />
                        )}
                    />

                    {/* Legenda do calendário */}
                    <View style = {styles.legendRow}>
                        <View style = {styles.legendDot} />
                        <Text style = {stykes.legendText}>Dia de coleta na sua rua!</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white,
    },

    content : {
        paddingHorizontal : spacing.lg,
        paddingTop : spacing.md,
    },

    title : {
        ...typography.h1,
        color : colors.primary,
        marginBottom : spacing.xs,
    },

    subtitle : {
        ...typography.body,
        color : colors.textSecondary,
        lineHeight : 20,
    },

    calendarBox : {
        marginTop : spacing.md,
    },

    monthTitle : {
        ...typography.h3,
        color : colors.textSecondary,
        textTransform : 'uppercase',
        marginBottom : spacing.md,
    },

    dateList : {
        paddingBottom : spacing.sm,
    },

    legendRow : {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : spacing.md,
    },

    legendDot : {
        width: 16,
        height: 16,
        borderRadius: radius.full,
        backgroundColor: colors.primaryLight,
        marginRight: spacing.sm,
    },

    legendText : {
        ...typography.body,
        color : colors.textMuted,
    }
});