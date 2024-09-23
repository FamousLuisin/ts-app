import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [tempo, setTempo] = useState(0); // Estado para armazenar o tempo em milissegundos
  const [ativo, setAtivo] = useState(false); // Controle de início e pausa
  const intervalRef = useRef(null); // Ref para o intervalo de tempo

  // Função para iniciar ou pausar o cronômetro
  const startPause = () => {
    if (ativo) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else {
      intervalRef.current = setInterval(() => {
        setTempo((prevtempo) => prevtempo + 10); // Incrementa o tempo a cada 10ms
      }, 1);
    }
    setAtivo(!ativo);
  };

  // Função para reiniciar o cronômetro
  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setAtivo(false);
    setTempo(0);
  };

  // Função para formatar o tempo em minutos, segundos e milissegundos
  const formataTempo = (tempo) => {
    const minutes = Math.floor(tempo / 60000);
    const seconds = Math.floor((tempo % 60000) / 1000);
    const milliseconds = Math.floor((tempo % 1000) / 10);

    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cronômetro</Text>
      <Text style={styles.tempo}>{formataTempo(tempo)}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={startPause}>
          <Text style={styles.buttonText}>{ativo ? 'Pausar' : 'Iniciar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>Reiniciar</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  tempo: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});