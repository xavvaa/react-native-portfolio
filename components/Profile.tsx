import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../styles';
import profileImage from '../img/myImage.png';

export const Profile = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <View style={[styles.profileContainer, theme === 'light' ? styles.lightSection : styles.darkSection]}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={[styles.profileName, theme === 'light' ? styles.lightText : styles.darkText]}>
        Comia, Hannah Nicole L.
      </Text>
      <Text style={[styles.profileBio, theme === 'light' ? styles.lightText : styles.darkText]}>
        I am a student in De La Salle Lipa taking up a Bachelor of Science in Computer Science. I aspire to become a UI/UX designer in the future.
      </Text>
    </View>
  );
};
