import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserDetailsScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.image} />
      <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
      <Text style={styles.email}>Email: {user.email}</Text>
      <Text style={styles.phone}>Teléfono: {user.phone}</Text>
      <Text style={styles.address}>Dirección: {`${user.location.street.name}, ${user.location.city}, ${user.location.state}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 5,
  },
  phone: {
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    fontSize: 18,
    textAlign: 'center',
  },
});
