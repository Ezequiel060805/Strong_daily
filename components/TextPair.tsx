import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextPair = ({ id, label }: { id: number; label: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{id}</Text>
      <Text style={styles.text}>{label || 'No Label'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 16,
    color: '#2E7D32',
  },
});

export default TextPair;