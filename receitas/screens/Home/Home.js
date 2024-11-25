import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {
  const [receitas, setReceitas] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const carregarReceitas = async () => {
        try {
          const listaDeReceitas = await AsyncStorage.getItem("@receita");
          if (listaDeReceitas) {
            setReceitas(JSON.parse(listaDeReceitas));
          }
        } catch (error) {
          console.error("Não foi possível carregar as suas receitas:", error);
        }
      };

      carregarReceitas();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {receitas.map((receita, index) => (
            <TouchableOpacity 
            key={index} 
            style={styles.receitaContainer} 
            onPress={() => navigation.navigate('Receita', { receita })}
            >
              <Text style={styles.title}>{receita.titulo}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Formulario')}>
        <Text style={styles.buttonText}> + Adicionar receita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    padding: 20,
  },
  receitaContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ingredients: {
    fontSize: 14,
    color: '#FFA45B',
    fontStyle: 'italic',
  },
  button: {
    padding: 15,
    backgroundColor: "#FFA45B",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
