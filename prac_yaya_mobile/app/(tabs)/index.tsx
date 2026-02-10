import { Text, View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabOneScreen() {
  const [items, setItems] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1. Obtener datos de la API de Dragon Ball
  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters');
      const data = await response.json();
      setItems(data.items); // Guardamos la lista de personajes
    } catch (error) {
      console.error("Error conectando a la API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const siguiente = () => {
    if (index < items.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Reiniciar al llegar al final
    }
  };

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  const personaje = items[index];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dragon Ball Viewer</Text>
      
      {personaje && (
        <View style={styles.card}>
          <Image 
            source={{ uri: personaje.image }} 
            style={styles.charImage} 
            resizeMode="contain"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{personaje.name}</Text>
            <Text>ID: {personaje.id}</Text>
            <Text>Raza: {personaje.race}</Text>
            <Text>Género: {personaje.gender}</Text>
            <Text>Ki: {personaje.ki}</Text>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={siguiente}>
        <Text style={styles.buttonText}>Siguiente Personaje</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
  },
  charImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff9000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff9000',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});