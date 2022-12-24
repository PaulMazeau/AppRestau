import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Mood() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Foncedale</Text>
      <Text style={styles.text}>34</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    borderRadius: 25,
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  }
});