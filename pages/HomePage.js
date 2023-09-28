import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Selecciona una opción:</Text>
      <Button
        title="Ver Estudiantes"
        onPress={() => navigation.navigate('Students')}
      />
      <Button
        title="Ver Cursos"
        onPress={() => navigation.navigate('Courses')}
      />
    </View>
  );
};

export default HomePage;