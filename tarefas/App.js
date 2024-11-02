import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarefaInput from './components/tarefaInput';
import ListarTarefa from './components/listarTarefas';

export default function App() {
  
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const carregarTarefas = async () => {
      try {
          const salvarTarefas = await AsyncStorage.getItem("tarefas");
          if (salvarTarefas){ 
            setTarefas(JSON.parse(salvarTarefas))
          }
      } catch (error) {
          console.error("Não foi possivel carregar as tarefas:", error);
      }
    }

    carregarTarefas()
  }, [])


  useEffect(() => {
    const salvarTarefa = async () => {
      try {
        await AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
      } catch (error) {
        console.error('Erro ao salvar as tarefas:', error);
      }
    }

    salvarTarefa()
  }, [tarefas]);

  const addTarefa = (titulo) => {
    if (titulo.length > 0) {
      setTarefas([...tarefas, {id: tarefas.length + 1, titulo }]);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      <TarefaInput addTarefa={addTarefa} />
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<ListarTarefa tarefa={item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
