import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

import List from './List';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Doggo Friendly!</Text>
      <TouchableOpacity onPress={() => console.log("clicked on Rocky")}>
        <Image style={styles.image} source={require("./assets/DoggoFriendly.png")} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  }
});
