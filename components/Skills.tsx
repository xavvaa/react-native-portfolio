import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

interface SkillsProps {
  theme: 'light' | 'dark';
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  return (
    <View style={[styles.sectionContainer, theme === 'light' ? styles.lightSection : styles.darkSection]}>
      <Text style={[styles.sectionTitle, theme === 'light' ? styles.lightText : styles.darkText]}>
        Skills
      </Text>
      <Text style={[styles.sectionText, theme === 'light' ? styles.lightText : styles.darkText]}>
        React Native{'\n'}TypeScript{'\n'}Node.js{'\n'}React{'\n'}C++{'\n'}Javascript{'\n'}UiPath{'\n'}Figma
      </Text>
    </View>
  );
};
