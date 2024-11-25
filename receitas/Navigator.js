import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import HomeScreen from './screens/Home/Home';
import FormularioScreen from './screens/Formulario/Formulario';
import ReceitaScreen from './screens/Receita/Receita'

const Stack = createNativeStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Suas receitas', headerTitleAlign: 'center', headerTitleStyle: styles.title, headerStyle: styles.header }} />
        <Stack.Screen name="Formulario" component={FormularioScreen} options={{ title: 'Nova receita', headerTitleAlign: 'center', headerTitleStyle: styles.title, headerStyle: styles.header }} />
        <Stack.Screen name="Receita" component={ReceitaScreen} options={({ route }) => ({ title: route.params.receita.titulo, headerTitleAlign: 'center', headerTitleStyle: styles.title, headerStyle: styles.header })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#6BCB77",
      textAlign: 'center',
    },
    header: {
        alignItems: "center",
        justifyContent: "center"
    }
  });