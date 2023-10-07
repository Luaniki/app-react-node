import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default function Courses({ navigation }) {
    const [cursos, setCursos] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:3001/api/v1/getCursos')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Datos recibidos', data);
    //         setCursos(data);
    //     })

    //     .catch(error => {
    //         console.log('Error al obtener los datos', error);
    //     });
    // }, []); 


    const pressHandler = () => {
        navigation.navigate('Students');
    }
    return (
        <View style={styles.container}>
      <Text>Bienvenido a Estudiantes</Text>
      <Button title='Ir a todos los estudiantes' onPress={pressHandler} />
      {}
      {cursos.map((curso, index) => (
        <Text key={index}>{curso.nombre}</Text>
      ))}
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

