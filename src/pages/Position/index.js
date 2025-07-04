import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import cart from "../../assets/icons/cart.png";

const Position = () => {
  return (
    <View style={styles.Wrapper}>
      <Text>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  Wrapper: { padding: 20, alignItems: "center" },
  cartWrapper: {
    borderWidth: 2,
    borderColor: "#4398D1",
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 40,
  },
  iconCart: { width: 50, heigth: 50 },
  text: { fontSize: 12, color: "#777777", fontWeight: "700", marginTop: 8 },
  notif: {
    fontSize: 12,
    color: "with",
    backgroundColor: "#6FCF97",
    padding: 4,
    borderRadius: 25,
    width: 24,
    heigth: 24,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
