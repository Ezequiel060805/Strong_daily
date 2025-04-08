import { View, Text,Button, Alert, StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import ItemHistory from '../../components/ItemHistory';


const explore = () => {
  const history = [
    { id: 1, title: 'Chest day', routineDate: new Date(), totalLift: 1150, duration: '30 mins' },
    { id: 2, title: 'Leg day', routineDate: new Date(), totalLift: 1200, duration: '45 mins' },
    { id: 3, title: 'Back day', routineDate: new Date(), totalLift: 1300, duration: '60 mins' },
    { id: 4, title: 'Shoulder day', routineDate: new Date(), totalLift: 1400, duration: '50 mins' },
    { id: 5, title: 'Arm day', routineDate: new Date(), totalLift: 1500, duration: '40 mins' },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerItem}>
      <Text style={styles.title}>History</Text>
      {history.map((history) => (
        <ItemHistory key={history.id} title={history.title} totalLift={history.totalLift} routineDate={history.routineDate} duration={history.duration} />
      ))}
      </View>
    </ScrollView>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 20,
    padding: 10,
    gap:10,
  },
  containerItem: {
    gap: 20,
  },
  title: {
    marginTop: 100,
    color: '#2E7D32',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  button:{
    position: 'absolute',
    borderRadius: 10,
    paddingVertical: 100,
  },
})