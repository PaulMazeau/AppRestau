import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarrousselBigCard from './components/CarrousselBigCard';
import CarrousselLittleCard from './components/CarrousselLittleCard';

export default function App() {
  return (
    <View style={styles.container}>
      <CarrousselLittleCard />
      <CarrousselBigCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
