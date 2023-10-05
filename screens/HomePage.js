import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomePage({ navigation }){
  const pressHandler = () => {
    navigation.navigate('Students');
  }

  return (
    <View style={styles.container}>
      <Text>Bienvenido a Estudiantes</Text>
      <Button title='Ir a Estudiantes' onPress={pressHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})