import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import StudentPage from './pages/Students';
import CoursePage from './pages/Courses';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Students" component={StudentPage} />
        <Stack.Screen name="Courses" component={CoursePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;