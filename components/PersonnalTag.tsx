import { StyleSheet, Text, View } from 'react-native';

export default function PersonnalTag() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vivant</Text>
    </View>
  );
}        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 50,
    borderRadius: 25,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  }
});