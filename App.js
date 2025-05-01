import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#60B5FF'}}/>
      <Text>PRAWITO</Text>
      <Toto/>
      <Text>Otto</Text>
      <Text>Arkintas</Text>
    </View>
  );
};

const Toto = () => {
  return <Text>Toto Mahasiswa Poltek SCI Prodi TRKJ</Text>;
};
export default App;