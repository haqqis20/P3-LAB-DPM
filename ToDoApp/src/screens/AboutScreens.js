import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AboutScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>About This App</Text>
    <Text>This is a simple To-Do List app built with React Native.</Text>
    <Button title="Back to Home" onPress={() => navigation.goBack()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AboutScreen;