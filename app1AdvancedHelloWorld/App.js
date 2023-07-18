import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import TextViewer from './components/TextViewer';
import ImageViewer from './components/ImageViewer';

export default function App() {
  const isLightMode = useColorScheme() === 'light'
  return (
    <View style={styles.container}>
      <Text style = {isLightMode ? styles.darkText : styles.lightText}>welcome</Text>
      <TextViewer   data = 'hello how are you'/>
      <ImageViewer></ImageViewer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText:{
    color:'#000'
  },
  lightText:{
    color:'#fff'
  }
});
