import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

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

export default SampleComponent;