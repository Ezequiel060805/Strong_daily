import { View, Text, TextInput, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const MeasurementForm = () => {
  const [measurements, setMeasurements] = useState({
    weight: '',
    bodyFatPercentage: '',
    caloricIntake: '',
    neck: '',
    shoulders: '',
    chest: '',
    waist: '',
    abdomen: '',
    hips: '',
    glutes: '',
    thighs: '',
    calves: '',
    arm_left: '',
    arm_right: '',
    leg_left: '',
    leg_right: '',
    calf_left: '',
    calf_right: '',
    leftForearm: ''
  });

  const handleChange = (name, value) => {
    setMeasurements(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Componente reutilizable para campos de entrada
  const MeasurementInput = ({ label, name, unit, isHeader = false }) => (
    <View style={styles.section}>
      <Text style={isHeader ? styles.subHeader : styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={measurements[name]}
          onChangeText={(text) => handleChange(name, text)}
          keyboardType="numeric"
          placeholder="0.0"
          placeholderTextColor="#666"
        />
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );

  // Grupos de campos organizados
  const measurementGroups = [
    {
      title: 'Weight',
      fields: [
        { label: 'Weight', name: 'weight', unit: 'lb' }
      ]
    },
    {
      title: 'Body parts',
      fields: [
        { label: 'Neck', name: 'neck', unit: 'cm' },
        { label: 'Shoulders', name: 'shoulders', unit: 'cm' },
        { label: 'Chest', name: 'chest', unit: 'cm' },
        { label: 'Waist', name: 'waist', unit: 'cm' },
        { label: 'Abdomen', name: 'abdomen', unit: 'cm' },
        { label: 'Hips', name: 'hips', unit: 'cm' },
        { label: 'Glutes', name: 'glutes', unit: 'cm' },
        { label: 'Thighs', name: 'thighs', unit: 'cm' },
        { label: 'Calves', name: 'calves', unit: 'cm' },
        { label: 'Left arm', name: 'arm_left', unit: 'cm' },
        { label: 'Right arm', name: 'arm_right', unit: 'cm' },
        { label: 'Left leg', name: 'leg_left', unit: 'cm' },
        { label: 'Right leg', name: 'leg_right', unit: 'cm' },
        { label: 'Left calf', name: 'calf_left', unit: 'cm' },
        { label: 'Right calf', name: 'calf_right', unit: 'cm' },
        { label: 'Left forearm', name: 'leftForearm', unit: 'cm' }
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Measure</Text>
            <Button 
        color={'#4CAF50'}
        title="Actualizar medidas"
        onPress={() => Alert.alert('Se han guardado las medidas')}
      />
      {measurementGroups.map((group, groupIndex) => (
        <View key={groupIndex}>
          {groupIndex > 0 && <Text style={styles.subHeader}>{group.title}</Text>}
          {group.fields.map((field, fieldIndex) => (
            <MeasurementInput
              key={fieldIndex}
              label={field.label}
              name={field.name}
              unit={field.unit}
              isHeader={groupIndex === 0 && fieldIndex === 0}
            />
          ))}

        </View>
      ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  title: {
    color: '#2E7D32',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 100,
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  subHeader: {
    color: '#388E3C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    color: '#388E3C',
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    color: 'grey',
  },
  unit: {
    marginLeft: 10,
    color: '#666',
  },
});

export default MeasurementForm;