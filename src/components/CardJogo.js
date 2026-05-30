import { Text, View, StyleSheet } from "react-native";

// Passe os parametros de forma correta e realize a estilização do componente
export default function CardJogo({titulo, genero, plataforma, nota}) {
  return (
    <View style={styles.card}>
      <Text>Titulo: {titulo}</Text>
      <Text>Genero: {genero}</Text>
      <Text>Plataforma: {plataforma}</Text>
      <Text>Nota: {nota}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333333',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  }
})
