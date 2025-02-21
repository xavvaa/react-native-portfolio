import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeToggle } from './ThemeToggle';
import { styles } from '../styles';

interface NavigationBarProps {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    scrollToSection: (yPosition: number) => void;
    profileRef: number;
    projectsRef: number;
    contactRef: number;
  }
  
  export const NavigationBar: React.FC<NavigationBarProps> = ({ 
    theme, 
    setTheme, 
    scrollToSection, 
    profileRef, 
    projectsRef, 
    contactRef 
  }) => {
    return (
      <View style={[styles.navBar, theme === 'light' ? styles.lightNavBar : styles.darkNavBar]}>
        <TouchableOpacity onPress={() => scrollToSection(profileRef)}>
          <Text style={[styles.navText, theme === 'light' ? styles.lightText : styles.darkText]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection(projectsRef)}>
          <Text style={[styles.navText, theme === 'light' ? styles.lightText : styles.darkText]}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection(contactRef)}>
          <Text style={[styles.navText, theme === 'light' ? styles.lightText : styles.darkText]}>Contact Info</Text>
        </TouchableOpacity>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </View>
    );
  };
  