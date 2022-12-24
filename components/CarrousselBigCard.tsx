import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantBigCard from './RestaurantBigCard';
import {ScrollView} from 'react-native-gesture-handler'

export default function CarrousselBigCard() {
  return (
    <View style={styles.container}>
      <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      >
      <RestaurantBigCard/>
      <RestaurantBigCard/>
      <RestaurantBigCard/>
      <RestaurantBigCard/>
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
