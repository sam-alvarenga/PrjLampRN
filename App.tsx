import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from './components/Header/Header';
import Lamp from './components/Lamp/Lamp';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Header/>

      <Text style={styles.textMessage}>Hello, Samantha. Você tem... Seu status é inativo</Text>
      <Lamp/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acendeu</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}> XPT0 Software - Todos os direitos reservados</Text>
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

 

  textMessage: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 10,
    width: '100%',
  },

 

  button: {
    backgroundColor: '#000',
    width: '50%',
    padding: 20,
    marginTop: 20,
    borderStyle: 'solid',
    borderColor: 'yellow',
    borderWidth: 2,
    marginBottom: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    

  },

  footer: {
    width: '100%',
    flex: 0.25,
    backgroundColor: '#000',
    justifyContent: 'center',
  },

  footerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,

  }

});
