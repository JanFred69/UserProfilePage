import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileInfo = ({ darkMode }) => {
    return (
        <View style={[styles.container, { backgroundColor: darkMode ? '#222' : '#f0f0f0' }]}>
            <Image
                source={require('../../../assets/janjan.jpg')} // Update this line to use your local image
                style={styles.profileImage}
            />
            <Text style={[styles.name, { color: darkMode ? '#fff' : '#000' }]}>Jan Fredrick Arriesgado</Text>
            <Text style={[styles.email, { color: darkMode ? '#aaa' : '#555' }]}>arriesgado.janfredrick@gmail.com</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        marginTop: 5,
    },
});

export default ProfileInfo;
