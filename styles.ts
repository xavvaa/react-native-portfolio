import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  lightMode: {
    backgroundColor: 'white',
  },
  darkMode: {
    backgroundColor: 'black',
  },
  lightSection: {
    backgroundColor: '#FFD6DA',
  },
  darkSection: {
    backgroundColor: '#5A0B5D',
  },
  lightText: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
  lightNavBar: {
    backgroundColor: '#FFC0CB', 
  },
  darkNavBar: {
    backgroundColor: '#5A0B5D', 
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%', 
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileBio: {
    fontSize: 14,
    textAlign: 'center',
  },
  sectionContainer: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%', 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    margin: 30,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  themeButton: {
    padding: 10,
    borderRadius: 50,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 10,
  },
  contactText: {
    fontSize: 16,
  },
  iconStyle: {
    fontSize: 22,
  },
  projectCard: {
    width: width * 0.85, 
    alignSelf: 'center',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, 
  },
  lightCard: {
    backgroundColor: '#fff', 
  },
  darkCard: {
    backgroundColor: '#222', 
  },
  projectImage: {
    width: '100%', 
    height: width * 0.35, 
    borderRadius: 10,
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 13, 
    marginTop: 4,
  },
});
