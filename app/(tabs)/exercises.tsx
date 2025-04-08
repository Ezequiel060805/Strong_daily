import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TextInput, Modal, Pressable, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TextPair from '../../components/TextPair'; // Import the reusable component

const Exercises = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState<number | null>(null);

  const exercises = [
    { id: 1, label: 'Bench Press' },
    { id: 2, label: 'Biceps Curl' },
    { id: 3, label: 'Triceps Extension' },
    { id: 4, label: 'Overhead Press' },
    { id: 5, label: 'Deadlift' },
    { id: 6, label: 'Squat' },
    { id: 7, label: 'Pull-Up' },
    { id: 8, label: 'Push-Up' },
    { id: 9, label: 'Lunges' },
    { id: 10, label: 'Plank' },
    { id: 11, label: 'Lat Pulldown' },
    { id: 12, label: 'Dumbbell Fly' },
    { id: 13, label: 'Incline Bench Press' },
    { id: 14, label: 'Seated Row' },
    { id: 15, label: 'Leg Press' },
    { id: 16, label: 'Calf Raise' },
];

  const categories = [
    { id: 1, label: 'Barbell' },
    { id: 2, label: 'Dumbell' },
    { id: 3, label: 'Machine' },
    { id: 4, label: 'No equip' },
  ];

  const bodyParts = [
    { id: 1, label: 'Arms' },
    { id: 2, label: 'Legs' },
    { id: 3, label: 'Back' },
    { id: 4, label: 'Chest' },
    { id: 5, label: 'Full-body' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Exercises</Text>

      {/* Render the exercises using the TextPair component */}
      {exercises.map((exercise) => (
        <TextPair key={exercise.id} id={exercise.id} label={exercise.label} />
      ))}

      {/* Modal and other UI elements */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStandard}>Name</Text>
            <TextInput style={styles.input} placeholder="..." />
            <Text style={styles.textStandard}>Category</Text>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            >
              {categories.map((cat) => (
                <Picker.Item key={cat.id} label={cat.label} value={cat.id} />
              ))}
            </Picker>
            <Text style={styles.textStandard}>Body part</Text>
            <Picker
              selectedValue={selectedBodyPart}
              onValueChange={(itemValue) => setSelectedBodyPart(itemValue)}
            >
              {bodyParts.map((cat) => (
                <Picker.Item key={cat.id} label={cat.label} value={cat.id} />
              ))}
            </Picker>
            <View style={{flexDirection: 'row', justifyContent: 'center',gap: 10}}>
            <Pressable
              style={[styles.button, styles.buttonCloseCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <View>
              <Text style={styles.textStyle}>   Cancel   </Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <View>
              <Text style={styles.textStyle}>      Save      </Text>
              </View>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Create exercise</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 20,
    padding: 10,
    gap: 10,
  },
  title: {
    marginTop: 100,
    color: '#2E7D32',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  centeredView: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  textStandard: {
    marginTop: 10,
    color: '#388E3C',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#C8E6C9',
    borderRadius: 20,
    padding: 35,
    marginTop: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#4CAF50',
    borderRadius: 3,
    marginLeft: 0,
    marginRight: 0,
  },
  buttonClose: {
    backgroundColor: '#4CAF50',
  },
  buttonCloseCancel: {
    backgroundColor: '#FF5722',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Exercises;