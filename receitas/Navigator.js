import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import HomeScreen from './screens/Home/Home';
import ReceitaScreen from './screens/Formulario/Formulario';

const Stack = createNativeStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Suas receitas', headerTitleAlign: 'center', headerTitleStyle: styles.title, headerStyle: styles.header }} />
        <Stack.Screen name="Formulario" component={ReceitaScreen} options={{ title: 'Nova receita', headerTitleAlign: 'center', headerTitleStyle: styles.title, headerStyle: styles.header }} />
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