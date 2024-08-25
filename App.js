import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './src/screen/UserListScreen';
import UserDetailsScreen from './src/screen/UserDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'Lista de Usuarios' }} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{ title: 'Detalles del Usuario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
