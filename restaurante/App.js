import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0); // Estado para armazenar o número de pessoas

  // Função para incrementar o contador
  const incrementar = () => {
    setContador((prevContador) => prevContador + 1);
  };

  // Função para decrementar o contador
  const decrementar = () => {
    // Evita que o contador fique negativo
    if (contador > 0) {
      setContador((prevContador) => prevContador - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Restaurante</Text>
      <Text style={styles.counter}>{contador}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonAdd} onPress={incrementar}>
          <Text style={styles.buttonText}>Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRem} onPress={decrementar}>
          <Text style={styles.buttonText}>Saída</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  counter: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonAdd: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    display: 'block',
    width:140,
    alignItems:'center'
  },
  buttonRem: {
    backgroundColor: '#ff4c4c',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    display: 'block',
    width:140,
    alignItems:'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
