import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../styles';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  return (
    <TouchableOpacity onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <MaterialCommunityIcons 
        name={theme === 'light' ? 'weather-sunny' : 'weather-night'} 
        size={30} 
        color={theme === 'light' ? 'black' : 'white'} 
      />
    </TouchableOpacity>
  );
};
