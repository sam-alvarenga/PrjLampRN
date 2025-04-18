import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header/Header';
import Lamp from '../components/Lamp/Lamp';
import Mensage from '../components/Message/Mensage';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <Header />

            <Mensage />

            <Lamp />

            <Button />

            <Footer />

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});