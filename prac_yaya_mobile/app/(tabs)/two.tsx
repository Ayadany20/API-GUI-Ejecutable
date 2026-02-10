import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons'; // Iconos que ya vienen en Expo
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  
  const abrirGithub = () => {
    // REEMPLAZA con tu link real de GitHub
    Linking.openURL('https://github.com/ayada'); 
  };

  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" size={80} color="#ea00ff" style={{ marginBottom: 20 }} />
      
      <Text style={styles.title}>Perfil del Desarrollador</Text>
      <Text style={styles.subtitle}>Ayadany Mesino</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.card}>
        <Text style={styles.infoTitle}>Proyecto:</Text>
        <Text style={styles.infoText}>Visor de Personajes Dragon Ball Z</Text>
        
        <Text style={styles.infoTitle}>Tecnologías:</Text>
        <Text style={styles.infoText}>React Native + Expo + Vite</Text>
      </View>

      <TouchableOpacity style={styles.githubButton} onPress={abrirGithub}>
        <FontAwesome name="github" size={24} color="white" />
        <Text style={styles.buttonText}> Ver Repositorio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(150, 150, 150, 0.1)',
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ff9000',
    textTransform: 'uppercase',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
  },
  githubButton: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});