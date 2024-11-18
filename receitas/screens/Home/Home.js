import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
  
  const [receitas, setReceitas] = useState([])

  useEffect(() => {
    const carregarReceitas = async () => {
      try{
        const listaDeReceitas = await AsyncStorage.getItem("receitas")
        if(listaDeReceitas) {
          setReceitas(JSON.parse(listaDeReceitas))
        }
      } catch (error) {
        console.error("Não foi possivel carregar as suas receitas:", error);
      }
    }

    carregarReceitas()
  }, [])
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Formulario')}>
        <Text style={styles.buttonText}> + Adicionar receita</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6BCB77"
  },
  button: {
    padding: 10,
    backgroundColor: "#FFA45B",
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center"
  }
});