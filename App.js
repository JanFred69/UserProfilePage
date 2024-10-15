import React, { useState } from 'react';
import { View, Switch, StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/components/Header/Header';
import ProfileInfo from './src/components/ProfileInfo/ProfileInfo';
import SocialLinks from './src/components/SocialLinks/SocialLinks';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: darkMode ? '#000' : '#fff' }]}>
            <Header darkMode={darkMode} />
            <View style={styles.darkModeToggle}>
                <Switch
                    value={darkMode}
                    onValueChange={(value) => setDarkMode(value)}
                />
            </View>
            <ProfileInfo darkMode={darkMode} />
            <SocialLinks darkMode={darkMode} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    darkModeToggle: {
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default App;
