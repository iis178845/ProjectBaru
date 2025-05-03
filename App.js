import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View 
        style={{
          width: 100, 
          height: 100, 
          backgroundColor: '#60B5FF', 
          borderWidth: 2, 
          borderColor: '#5f27cd', 
          marginTop: 20, 
          marginLeft: 20,
          }} 
          />
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40, 

  }
})

const SampleComponent = () => {
  return (
    <View >
    <View style={{width: 80, height: 80, backgroundColor: '#60B5FF'}}/>
    <Text>PRAWITO</Text>
    <Toto/>
    <Text>Otto</Text>
    <Text>Arkintas</Text>
    <Photo />
    <TextInput style={{borderWidth: 1}} />
    <BoxGreen/>
    <Profile/>
    </View>

  );
};
const Toto = () => {
  return <Text>Toto Mahasiswa Poltek SCI Prodi TRKJ SEMESTER 4</Text>;
};

const Photo = () => {
  return (
  <Image 
    source= {require('./assets/gukguk.jpeg')}
    style={{width: 200, heigth: 100, objectFit:'cover'}}
  />
  );
};

class BoxGreen extends Component {
  render () {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Profile extends Component{
  render () {
    return (
    <View>
    <Image source={require('./assets/gukgukwarna.jpeg')} 
    style={{width: 200, heigth: 100, borderRadius: 50 }}
    />
    <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>

    </View>
    )
  }
}
export default App;