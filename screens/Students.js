import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Students({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Courses');
    }
    return (
        <View style={styles.container}>
            <Text>Bienvenido a Estudiantes</Text>
            <Button title='Ir a los cursos inscritos' onPress={pressHandler} />
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