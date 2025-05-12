import React, { Component, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import profile from "../../assets/image/profile.jpg";

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log("==> constructor");
//     this.state = {
//       subsciber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log("==> component did mount");
//     setTimeout(() => {
//       this.setState({ subsciber: 400 });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log("==> component did update");
//   }

//   componentWillUnmount() {
//     console.log("==> component did will unmount");
//   }

//   render() {
//     console.log("===> render");
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: "row",
//             backgroundColor: "#c8d6e5",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <View style={{ backgroundColor: "#ee5253", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#feca57", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#1dd1a1", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#5f27cd", width: 50, height: 50 }} />
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//           <Text>Beranda</Text>
//           <Text>Vidio</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
//         >
//           <Image
//             source={profile}
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: 50,
//               marginRight: 14,
//             }}
//           />
//           <View>
//             <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//               Toto Arkintas
//             </Text>
//             <Text>{this.state.subsciber} Ribu Subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log("did mount");
    setTimeout(() => {
      setSubscriber(600);
    }, 2000);
    return () => {
      console.log("did update");
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log("did update");
  //   setTimeout(() => {
  //     setSubscriber(400);
  //   }, 2000);
  // }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#c8d6e5",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ backgroundColor: "#ee5253", width: 50, height: 50 }} />
        <View style={{ backgroundColor: "#feca57", width: 50, height: 50 }} />
        <View style={{ backgroundColor: "#1dd1a1", width: 50, height: 50 }} />
        <View style={{ backgroundColor: "#5f27cd", width: 50, height: 50 }} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text>Beranda</Text>
        <Text>Vidio</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <Image
          source={profile}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 14,
          }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Toto Arkintas
          </Text>
          <Text>{subscriber} Ribu Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
