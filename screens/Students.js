import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default function Students({ navigation }) {

    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/getPersonas')
            .then(response => response.json())
            .then(data => {
                console.log('Datos recibidos', data);
                setEstudiantes(data.data);
            })

            .catch(error => {
                console.log('Error al obtener los datos', error);
            });
    }, []);

    const pressHandler = () => {
        navigation.navigate('Courses');
    }
    return (
        <View style={styles.container}>
            <Text>Bienvenido a Estudiantes</Text>
            <Button title='Ir a los cursos inscritos' onPress={pressHandler} />
            {estudiantes.map((item,index)=>(<Text key={index+1}>{item.nombre}</Text>))}
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