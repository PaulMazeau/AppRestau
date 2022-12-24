import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantLittleCard from './RestaurantLittleCard';
import {ScrollView} from 'react-native-gesture-handler'

export default function CarrousselLittleCard() {
  return (
    <View style={styles.container}>
      <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      >
      <RestaurantLittleCard/>
      <RestaurantLittleCard/>
      <RestaurantLittleCard/>
      <RestaurantLittleCard/>
     </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
