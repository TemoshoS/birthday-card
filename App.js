import { StyleSheet, Text, View } from 'react-native';
import BirthdayCard from './pages/BirthdayCard';
import { useFonts } from 'expo-font';

export default function App() {
  useFonts({
    
    'Handjet-Light': require('./assets/static/Handjet-Light.ttf')
  })

  return (
    <View style={styles.container}>
      <BirthdayCard/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
