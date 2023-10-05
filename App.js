import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import Students from './screens/Students';
import Courses from './screens/Courses';

const Menu = createNativeStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Menu.Navigator initialRouteName="Home">
        <Menu.Screen name="Home" component={HomePage} />
        <Menu.Screen name="Students" component={Students} />
        <Menu.Screen name="Courses" component={Courses} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}