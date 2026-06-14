import React from "react";
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import { colors, spacing } from "../../theme";

export default function HeaderLogo() {
    return (
        <View style = {styles.container}>
            <Image
                source = {require('../logos/logo_verde.png')}
                style = {styles.logo}
                resizeMode = "contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.primaryBorder,
        width: '100%',
        alignItems : 'center',
        paddingVertical : spacing.md,
        borderBottomWidth : 1,
        borderBottomColor: colors.primaryLight,
    },
    logo : {
        width: 120,
        height: 60,
    }
});