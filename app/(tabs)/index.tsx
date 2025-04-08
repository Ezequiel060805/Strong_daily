import { View, Text,Button, Alert, StyleSheet} from 'react-native'
import React,{useState} from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const app = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Strong</Text>
      <Button 
        color={'#4CAF50'}
        title="Start Workout"
        onPress={() => Alert.alert('Botón presionado')}
      />
      <Calendar
        backgroundColor={'grey'}
        onDayPress={day => {
          console.log('selected day', day);
      }}
      />
    </View>
  )
}
export default app

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
  title: {
    marginTop: 100,
    color: '#2E7D32',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  button:{
    position: 'absolute',
    borderRadius: 100,
    paddingVertical: 100,
  },
})