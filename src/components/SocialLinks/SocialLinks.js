import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const SocialLinks = ({ darkMode }) => {
    const openLink = (url) => {
        Linking.openURL(url);
    };

    return (
        <View style={[styles.container, { backgroundColor: darkMode ? '#222' : '#f0f0f0' }]}>
            <TouchableOpacity style={styles.linkContainer} onPress={() => openLink('https://www.facebook.com/fredrick.Arriesgado?mibextid=ZbWKwL')}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }}
                    style={styles.icon}
                />
                <Text style={[styles.link, { color: darkMode ? '#1e90ff' : '#007bff' }]}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkContainer} onPress={() => openLink('https://www.instagram.com/janfredrick_/profilecard/?igsh=NmQydG5jeGZpbTR1')}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' }}
                    style={styles.icon}
                />
                <Text style={[styles.link, { color: darkMode ? '#c13584' : '#e1306c' }]}>Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkContainer} onPress={() => openLink('mailto:arriesgado.janfredrick@gmail.com')}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png' }}
                    style={styles.icon}
                />
                <Text style={[styles.link, { color: darkMode ? '#32cd32' : '#28a745' }]}>Email</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    link: {
        fontSize: 16,
    },
});

export default SocialLinks;
