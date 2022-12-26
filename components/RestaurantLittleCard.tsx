import { StyleSheet, Text, View } from 'react-native';
import RestaurantTag from './RestaurantTag';

export default function RestaurantLittleCard() {
  return (
    <View style={styles.container}>
            <Text style={styles.Title}> Mongelli</Text>

            <RestaurantTag />
            
                <View style={styles.BottomCard}>
                    <Text style={styles.Distance}> 6km</Text>
                    <Text style={styles.Description}> Un restaurant...</Text>
                </View>
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    backgroundColor: '#2D2C2C',
    margin: 10,
    borderRadius: 7,
    padding: 10,
    height: 115,
    width: 276,
  },
  BottomCard: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  Thumbnail: {
    width: 200,
    height: 200,
  },
  Title: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'left',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  Distance: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  Description: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
