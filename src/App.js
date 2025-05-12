import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import SampleComponent from "./pages/SampleComponent";
import StylingComponent from "./pages/StylingComponent";
import FlexBox from "./pages/FlexBox";
import Position from "./pages/Position";
import PropsDinamis from "./pages/PropsDinamis";
const App = () => {
  // const [isShow, setIsShow] = useState(true);
  // setEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);
  // }, []);

  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
        <PropsDinamis />
      </ScrollView>
    </View>
  );
};

export default App;
