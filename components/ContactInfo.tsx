import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { styles } from '../styles';

interface ContactInfoProps {
  theme: 'light' | 'dark';
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ theme }) => {
  const email = 'hannah_nicole_comia@dlsl.edu.ph';
  const github = 'https://github.com/xavvaa';
  const linkedin = 'https://www.linkedin.com/in/hannah-comia-10a7a3310/';
  const facebook = 'https://www.facebook.com/hannah.comia.18';
  const locationUrl = 'https://maps.app.goo.gl/Fo7DZHXxKY18FkW18';

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <View style={[styles.sectionContainer, theme === 'light' ? styles.lightSection : styles.darkSection]}>
      <Text style={[styles.sectionTitle, theme === 'light' ? styles.lightText : styles.darkText]}>Contact Info</Text>

      <TouchableOpacity style={styles.contactRow} onPress={() => openLink(`mailto:${email}`)}>
        <MaterialIcons name="email" style={[styles.iconStyle, theme === 'light' ? styles.lightText : styles.darkText]} />
        <Text style={[styles.contactText, theme === 'light' ? styles.lightText : styles.darkText]}>{email}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactRow} onPress={() => openLink(locationUrl)}>
        <FontAwesome5 name="map-marker-alt" style={[styles.iconStyle, theme === 'light' ? styles.lightText : styles.darkText]} />
        <Text style={[styles.contactText, theme === 'light' ? styles.lightText : styles.darkText]}>
          San Pablo City, Laguna, Philippines
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactRow} onPress={() => openLink(github)}>
        <FontAwesome5 name="github" style={[styles.iconStyle, theme === 'light' ? styles.lightText : styles.darkText]} />
        <Text style={[styles.contactText, theme === 'light' ? styles.lightText : styles.darkText]}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactRow} onPress={() => openLink(linkedin)}>
        <Entypo name="linkedin" style={[styles.iconStyle, theme === 'light' ? styles.lightText : styles.darkText]} />
        <Text style={[styles.contactText, theme === 'light' ? styles.lightText : styles.darkText]}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactRow} onPress={() => openLink(facebook)}>
        <Entypo name="facebook" style={[styles.iconStyle, theme === 'light' ? styles.lightText : styles.darkText]} />
        <Text style={[styles.contactText, theme === 'light' ? styles.lightText : styles.darkText]}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};
