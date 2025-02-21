import React from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import { styles } from '../styles';

// Get screen width
const { width } = Dimensions.get('window');

const projects = [
  {
    id: '1',
    title: 'Student Grade Computation for De La Salle Lipa using UiPath',
    description: 'An automated grade computation using UiPath. The automation streamlines data entry, formula-based grade computation, report generation, and automatic email sending.',
    image: require('../img/uipath.png'), // Import local image
  },
  {
    id: '2',
    title: 'Inventory Management System',
    description: 'A React-based inventory system.',
    image: require('../img/inventory.png'),
  },
  {
    id: '3',
    title: 'DEHV Prototype',
    description: 'DEHV is a mobile app for the elderly and those with hearing or visual impairments, designed to assist with daily tasks and enhance accessibility. It addresses concerns like medication reminders, battery usage, and language support, aiming to improve quality of life and adapt to the evolving needs of its users.',
    image: require('../img/dehv.png'),
  },
];

export const Projects = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <View style={[styles.sectionContainer, theme === 'light' ? styles.lightSection : styles.darkSection]}>
      <Text style={[styles.sectionTitle, theme === 'light' ? styles.lightText : styles.darkText]}>
        Projects
      </Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.projectCard, theme === 'light' ? styles.lightCard : styles.darkCard]}>
            <Image source={item.image} style={styles.projectImage} />
            <Text style={[styles.projectTitle, theme === 'light' ? styles.lightText : styles.darkText]}>
              {item.title}
            </Text>
            <Text style={[styles.projectDescription, theme === 'light' ? styles.lightText : styles.darkText]}>
              {item.description}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
