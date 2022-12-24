import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import FirebaseUtil from '../utils/FirebaseUtil';

export default function HomeScreen() {

    const signOut = () => {
        FirebaseUtil.signOut().catch((e) => console.log(e))
        alert("Déco pas possible");
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button onPress={() =>signOut()} title='Sign out' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
  });
  