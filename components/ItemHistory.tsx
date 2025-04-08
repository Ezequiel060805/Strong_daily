import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const ItemHistory = ({ title, routineDate,totalLift,duration }: { title: String; routineDate: Date, totalLift: Number, duration: string }) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, marginRight: 15}}>
      <Text style={styles.title}>{title}</Text>
      <FontAwesome name="bars" size={24} color={'grey'} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{duration || 'No Label'}</Text>
        <Text style={styles.text}>{`${totalLift} lb` || 'No Label'}</Text>
        <Text style={styles.text}>{routineDate.toLocaleDateString()}</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
  },
  textContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  title:{
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#2E7D32',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#2E7D32',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default ItemHistory;