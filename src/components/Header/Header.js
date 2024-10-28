import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ darkMode }) => {
    return (
        <View style={[styles.header, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
            <Text style={[styles.headerText, { color: darkMode ? '#fff' : '#000' }]}>
                User Profile
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
