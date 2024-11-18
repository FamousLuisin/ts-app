import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const saveRecipe = async () => {
    if (!title || !description || !ingredients) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    const newRecipe = { title, description, ingredients };

    try {
      const existingRecipes = await AsyncStorage.getItem('@recipes');
      const recipes = existingRecipes ? JSON.parse(existingRecipes) : [];
      recipes.push(newRecipe);
      await AsyncStorage.setItem('@recipes', JSON.stringify(recipes));
      Alert.alert('Sucesso', 'Receita adicionada com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a receita. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingredientes (separe por vírgula)"
        value={ingredients}
        onChangeText={setIngredients}
      />

      <TouchableOpacity style={styles.button} onPress={saveRecipe}>
        <Text style={styles.buttonText}>Salvar Receita</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FFA45B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});