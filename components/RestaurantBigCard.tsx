import { StyleSheet, Text, View, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import RestaurantTag from './RestaurantTag';

export default function RestaurantBigCard() {
  return (
    <View>
        <LinearGradient  start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 0.9}} colors={['#F4DEBE', '#EAA25D', '#E36D46']} style={styles.linearGradient}>
            <Image
                style={styles.Thumbnail}
                source={require('../assets/Img/pizza01.png')}
            />
            <Text style={styles.Title}> Mongelli</Text>

            <View style={styles.LittleCard}>
              <RestaurantTag />
              <RestaurantTag />
              <RestaurantTag />
            </View>

                <View style={styles.BottomCard}>
                    <Text style={styles.Distance}> 16km</Text>
                    <Text style={styles.Description}> Mongelli</Text>
                </View>
        </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({

  linearGradient: {
    padding: 16,
    borderRadius: 5,
    margin: 10,
    height: 382,
    width: 276,
  },
  LittleCard: {
    flexDirection:'row',
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
