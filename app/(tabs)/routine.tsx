import { View, Text, Button, StyleSheet, Animated, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';

const routine = () => {
  const [showWindow, setShowWindow] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current; // Initial value: 0 (hidden)

  const toggleWindow = () => {
    if (showWindow) {
      // Animation to hide (slide down)
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }).start(() => setShowWindow(false));
    } else {
      // Show and animate (slide up)
      setShowWindow(true);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    }
  };

  const windowTranslateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-2000, 0], // Moves from left (negative) to normal position
  });

  const windowTranslateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [2000, 0], // Moves from below (positive) to normal position
  });

  // Array of routines with detailed exercises
  const routines = [
    {
      id: 1,
      name: 'Chest & Triceps',
      duration: '45 mins',
      exercises: [
        { name: 'Bench Press', sets: 4, reps: 10, weight: '135 lbs' },
        { name: 'Incline Dumbbell Press', sets: 3, reps: 12, weight: '50 lbs' },
        { name: 'Tricep Dips', sets: 3, reps: 15, weight: 'Bodyweight' },
      ],
    },
    {
      id: 2,
      name: 'Back & Biceps',
      duration: '50 mins',
      exercises: [
        { name: 'Pull-Ups', sets: 4, reps: 10, weight: 'Bodyweight' },
        { name: 'Barbell Rows', sets: 3, reps: 12, weight: '115 lbs' },
        { name: 'Bicep Curls', sets: 3, reps: 15, weight: '25 lbs' },
      ],
    },
    {
      id: 3,
      name: 'Leg Day',
      duration: '60 mins',
      exercises: [
        { name: 'Squats', sets: 4, reps: 10, weight: '185 lbs' },
        { name: 'Leg Press', sets: 3, reps: 12, weight: '300 lbs' },
        { name: 'Lunges', sets: 3, reps: 15, weight: 'Bodyweight' },
      ],
    },
    {
      id: 4,
      name: 'Shoulders & Abs',
      duration: '40 mins',
      exercises: [
        { name: 'Overhead Press', sets: 4, reps: 10, weight: '95 lbs' },
        { name: 'Lateral Raises', sets: 3, reps: 12, weight: '15 lbs' },
        { name: 'Plank', sets: 3, reps: '1 min', weight: 'Bodyweight' },
      ],
    },
    {
      id: 5,
      name: 'Full Body',
      duration: '55 mins',
      exercises: [
        { name: 'Deadlifts', sets: 4, reps: 10, weight: '225 lbs' },
        { name: 'Push-Ups', sets: 3, reps: 15, weight: 'Bodyweight' },
        { name: 'Pull-Ups', sets: 3, reps: 12, weight: 'Bodyweight' },
      ],
    },
  ];

  return (
    <ScrollView
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <Text style={styles.title}>Workout</Text>
      <Text style={styles.subTitle}>Quick Start</Text>
      <Button
        color={'#4CAF50'}
        title="Start an empty workout"
        onPress={toggleWindow}
      />

      {/* Animated Window */}
      {showWindow && (
        <Animated.View
          style={[
            styles.window,
            {
              transform: [
                { translateX: windowTranslateX },
                { translateY: windowTranslateY },
              ],
            },
          ]}
        >
          <Button
            color={'#EF5350'}
            title="Cancel workout"
            onPress={toggleWindow}
          />
          <Text style={styles.textWindow}>hola</Text>
        </Animated.View>
      )}

      <Text
        style={{
          marginTop: 10,
          color: '#2E7D32',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'left',
        }}
      >
        Templates
      </Text>
      <Text style={styles.subTitle}>My Templates</Text>

      {/* Display routines */}
      <View style={styles.containerRoutine}>
        {routines.map((routine) => (
          <View key={routine.id} style={styles.routineCard}>
            <Text style={styles.routineName}>{routine.name}</Text>
            <Text style={styles.routineDetails}>
              Duration: {routine.duration}
            </Text>
            <Text style={styles.routineDetails}>Exercises:</Text>
            {routine.exercises.map((exercise, index) => (
              <View key={index} style={styles.exerciseCard}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDetails}>
                  Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default routine;

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
  containerRoutine: {
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
  },
  routineCard: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  routineName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  routineDetails: {
    fontSize: 14,
    color: '#555',
  },
  exerciseCard: {
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#555',
  },
  title: {
    marginTop: 100,
    color: '#2E7D32',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subTitle: {
    marginTop: 10,
    color: '#2E7D32',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  window: {
    position: 'absolute',
    bottom: 20,
    top: 20,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: '#C8E6C9',
    borderTopEndRadius: 100,
    paddingTop: '20%',
    paddingRight: '8%',
    paddingLeft: '6%',
  },
  textWindow: {
    marginTop: 10,
    color: 'black',
    fontSize: 30,
    fontWeight: 'light',
    textAlign: 'left',
  },
});