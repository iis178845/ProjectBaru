import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks dengan Styling Dasar */}
      <Text style={styles.title}>Selamat Datang di React Native!</Text>
      
      {/* Teks dengan warna dan ukuran berbeda */}
      <Text style={styles.subtitle}>Belajar Text Component dan Styling</Text>
     
      {/* Teks dengan daya italic dab bold */}
      <Text style={styles.emphasis}>INI ADALAH TEKS PENTING!</Text>

      {/* Contoh teks dengan multiline dengan batasan baris */}
      <Text numberOfLines={3} ellipsizeMode="tail" styles={styles.Appmultiline}>
         Ini adalah contoh teks yang sangat panjang sehingga akan dipotong jika melebihi dua baris. Fitur ini berguna untuk menjaga tampilan tetap rapi.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7AE2CF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  emphasis: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#d9534f',
    marginBottom: 30,
  },
  multiline: {
    fontSize: 16,
    color: '#444'
  }
});
