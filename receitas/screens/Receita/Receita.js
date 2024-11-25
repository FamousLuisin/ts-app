import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Receita({ route }) {
    const { receita } = route.params;
  
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.description}>{receita.descricao}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.ingredients}>{receita.ingredientes}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.preparo}>{receita.preparo}</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 20,
    },
    description: {
      fontSize: 18,
      color: '#4E6C50',
      lineHeight: 24,
      marginBottom: 15,
    },
    ingredients: {
      fontSize: 18,
      color: '#FFA45B',
      fontStyle: 'italic',
      marginBottom: 15,
    },
    preparo: {
      fontSize: 18,
      color: '#6BCB77',
      lineHeight: 24,
    },
    card: {
      backgroundColor: '#F5F5F5',
      borderRadius: 15,
      padding: 15,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
  });