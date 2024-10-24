import React from 'react';
import {View, Image, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

export default function AccountOption({uri,title,subtitle}: {uri: string, title: string, subtitle?: string}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        marginLeft:20
    },
    image: {
        width: 25,
        height: 25,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.9
    },
    subtitle: {
        fontSize: 12,
        color: 'gray',
    },
});