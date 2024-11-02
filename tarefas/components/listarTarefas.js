import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListarTarefa({ tarefa }) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{tarefa.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  taskText: {
    fontSize: 16,
  },
})