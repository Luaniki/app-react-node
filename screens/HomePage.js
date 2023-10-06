import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('Courses');
  }
    return (
      <View style={styles.container}>
        <Text>Bienvenido al menu</Text>
        <Button title='Ir a todos los cursos' onPress={pressHandler} />
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