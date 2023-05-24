import { Button } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggle  = event => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Button onPress={toggle}>Button</Button>
      <Text>{"\n"}</Text>
      { isVisible ? <Text>Open up App.js to start working on your app!</Text> : <Text> </Text> }
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
