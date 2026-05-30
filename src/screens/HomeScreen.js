// TODO: estilizar esta tela com as cores e identidade visual do seu tema
import { useState, useEffect } from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const jogos = [
  {
    id: '1',
    titulo: 'Violence District',
    genero: 'Terror / Sobrevivência',
    plataforma: 'PC / Mobile',
    nota: '10/10',
    sinopse:
      'Inspirado em DBD, Violence District é um jogo de terror e sobrevivência no Roblox. Ele contém 8 killers, variedade de perks e mapas. Arrume geradores e escape do lugar ou mate os sobreviventes.',
  },
  {
    id: '2',
    titulo: 'Bite by Night',
    genero: 'Terror / Sobrevivência',
    plataforma: 'PC / Mobile',
    nota: '10/10',
    sinopse:
      'Inspirado em DBD, Bite by Night é um jogo de terror e sobrevivência no Roblox. Seu diferencial, entretanto, é o fato de ser inspirado também em Five Nights at Freddy. Ele contém 4 killers, classes e mapas. Arrume geradores e espere até às 6:00AM para escapar do lugar ou mate os sobreviventes.',
  },
  {
    id: '3',
    titulo: 'Arsenal',
    genero: 'Ação / FPS',
    plataforma: 'PC / Mobile',
    nota: '10/10',
    sinopse:
      'Um jogo de tiro em equipes, duplas ou solo. Cada round é um mapa diferente e com um modo diferente. O jogo no Roblox conta com grande variedade de skin de personagens.',
  },
  {
    id: '4',
    titulo: 'OSU!',
    genero: 'Ritmo',
    plataforma: 'PC',
    nota: '9/10',
    sinopse:
      'Um jogo de ritmo com diferentes mecânicas, sendo a mais famosa a osu!mania. Clique nos circulos no momento da batida, seguindo o ritmo e obtendo uma pontuação de SS até D. Contém modificadores que podem aumentar ou diminuir a pontuação, mudando o jogo. Há vários beatmaps em seu site oficial, sendo esses mapas feito por fãs que escolhem várias músicas.',
  },
  {
    id: '5',
    titulo: 'Fisch',
    genero: 'RPG',
    plataforma: 'PC / Mobile',
    nota: '9/10',
    sinopse:
      'Explore o mundo e pesque peixes, relíquias, lixo e até criaturas místicas. O RPG encontrado no Roblox conta com mais de mil peixes variados, várias varas de pesca, eventos, missões e encantamentos.',
  },
  {
    id: '6',
    titulo: 'Minecraft',
    genero: 'Ação / Sobrevivência',
    plataforma: 'PC / Mobile',
    nota: '9/10',
    sinopse:
      'Explore o mundo vasto e se aventure em cavernas. Construa casas e encontre civilizações. Minecraft é um jogo aberto para a criatividade.',
  },
];

// TODO: adicionar { navigation } como parametro quando a navegacao estiver configurada

export default function HomeScreen({navigation}) {
  const [busca, setBusca] = useState('')

  const [jogosFiltrados, setJogosFiltrados] = useState(jogos)

   useEffect(() => {
     const resultado = jogos.filter((jogo) =>
       jogo.titulo.toLowerCase().includes(busca.toLowerCase())
     );
     setJogosFiltrados(resultado);
   }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detalhe', { ...item })}
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* TODO: colocar o nome do seu app e subtitulo */}
        <Text style={styles.headerTitulo}>Games26</Text>
        <Text style={styles.headerSubtitulo}>
          Veja os jogos mais jogados de 2026
        </Text>
      </View>

      {/* Campo de busca — TODO: adicionar value={busca} e onChangeText={setBusca} */}
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {/* TODO: trocar data={jogos} por data={jogosFiltrados} apos implementar o estado */}
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema

const styles = StyleSheet.create({
  buscaContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  buscaInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#1A1A1A',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitulo: {
    fontSize: 13,
    color: '#CCCCCC',
    marginTop: 4,
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555555',
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: '#888888',
  },
});
