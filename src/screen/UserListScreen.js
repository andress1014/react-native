import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10')
      .then(response => {
        setUsers(response.data.results);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>Error al cargar usuarios</Text>;
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.login.uuid}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('UserDetails', { user: item })}>
          <View style={styles.userContainer}>
            <Image source={{ uri: item.picture.thumbnail }} style={styles.userImage} />
            <Text style={styles.userName}>{`${item.name.first} ${item.name.last}`}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
  },
});
