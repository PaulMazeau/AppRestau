import { StyleSheet, Text, View, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function RestaurantTag() {
  return (
    <View style={styles.container}>
       <Text>Calme</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        borderColor: "#FFF",
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
      },
});
