import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preparo, setPreparo] = useState('');

  const saveRecipe = async () => {
    if (!titulo || !descricao || !ingredientes || !preparo) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    const novaReceita = { titulo, descricao, ingredientes, preparo };

    try {
      const receitasExistentes = await AsyncStorage.getItem('@receita');
      const receita = receitasExistentes ? JSON.parse(receitasExistentes) : [];
      receita.push(novaReceita);
      await AsyncStorage.setItem('@receita', JSON.stringify(receita));
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
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingredientes (separe por vírgula)"
        value={ingredientes}
        onChangeText={setIngredientes}
      />

      <TextInput
        style={styles.input}
        placeholder="Preparo"
        value={preparo}
        onChangeText={setPreparo}
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