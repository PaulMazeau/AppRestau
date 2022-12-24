import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantBigCard from './components/RestaurantBigCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ratio!</Text>
      <RestaurantBigCard/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
