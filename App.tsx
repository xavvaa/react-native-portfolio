import React, { useState, useRef } from 'react';
import { View, ScrollView, LayoutChangeEvent } from 'react-native';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import { ContactInfo } from './components/ContactInfo';
import { Projects } from './components/Projects';
import { NavigationBar } from './components/NavigationBar';
import { styles } from './styles';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Refs for scrolling
  const scrollViewRef = useRef<ScrollView>(null);
  const [profileY, setProfileY] = useState(0);
  const [projectsY, setProjectsY] = useState(0);
  const [contactY, setContactY] = useState(0);

  // Function to handle scrolling
  const scrollToSection = (yPosition: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: yPosition, animated: true });
    }
  };

  return (
    <View style={[styles.container, theme === 'light' ? styles.lightMode : styles.darkMode]}>
      <NavigationBar 
        theme={theme} 
        setTheme={setTheme} 
        scrollToSection={scrollToSection} 
        profileRef={profileY} 
        projectsRef={projectsY} 
        contactRef={contactY} 
      />
      
      <ScrollView ref={scrollViewRef}>
        <View onLayout={(event: LayoutChangeEvent) => setProfileY(event.nativeEvent.layout.y)}>
          <Profile theme={theme} />
        </View>
        <Skills theme={theme} />
        <View onLayout={(event: LayoutChangeEvent) => setProjectsY(event.nativeEvent.layout.y)}>
          <Projects theme={theme} />
        </View>
        <View onLayout={(event: LayoutChangeEvent) => setContactY(event.nativeEvent.layout.y)}>
          <ContactInfo theme={theme} />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
