import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const frases = [
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em si mesmo e todo o resto virá naturalmente.",
  "Não importa quão devagar você vá, contanto que não pare.",
  "Os únicos limites que você tem são aqueles que você acredita.",
  "Transforme seus sonhos em metas e suas metas em conquistas."
]



export default function App() {

  const [frase, setFrase] = useState(""); // Frase atual
  const [aberto, setAberto] = useState(false); // Estado atual do biscoito

  // Função para gerar uma frase aleatoria
  function randomFrase() {
    let index = Math.floor(Math.random() * frases.length);
  
    // Verificação para saber se o biscoito ta aberto
    if (!aberto) {
      setAberto(true);
      setFrase(frases[index]);
    } else{
      setAberto(false);
      setFrase("");
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo ao Forune Cookie</Text>
      <TouchableOpacity onPress={randomFrase}>
        <Image  
          source={aberto ? require('./assets/coockieOpen.jpg') : require('./assets/coockie.jpg') } // Usar require para imagens locais
          style={styles.image}
        />
      </TouchableOpacity>
      {frase !== "" && (
        <Text style={styles.fortune}>{frase}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#f8f9fa', // Fundo mais claro
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 15, // Bordas arredondadas
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  fortune: {
    fontSize: 18, // Aumenta o tamanho da fonte
    color: '#dc3545', // Cor vermelha mais vibrante
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff', // Fundo branco para destaque
    borderRadius: 10, // Bordas arredondadas
    borderColor: '#dc3545', // Cor da borda
    borderWidth: 1, // Espessura da borda
  },
  text: {
    fontSize: 24, // Aumenta o tamanho da fonte
    paddingVertical: 20,
    paddingHorizontal: 50,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#343a40', // Cor do texto mais escura
    fontWeight: 'bold', // Negrito
  },
});