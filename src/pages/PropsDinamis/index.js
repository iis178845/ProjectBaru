import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const Story = (props) => {
  return (
    <View style={{ alignItems: "center", marginRight: 20 }}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: "center" }}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row" }}>
          <Story
            judul="Facebook"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKk-80bmp1A6DbAbLE-16A8YFJGVqv2KDZw&s"
          />
          <Story
            judul="Kelas Online"
            gambar="https://www.sekolah.mu/blog/wp-content/uploads/2022/07/1-0-kompasiana.jpg"
          />
          <Story
            judul="Belajar Coding"
            gambar="https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2018/07/dewaweb-blog-belajar-coding-untuk-pemula.png"
          />
          <Story
            judul="Wewara"
            gambar="https://berkas.lektur.id/kbbi-tesaurus/wewara.jpg"
          />
          <Story
            judul="Panorama"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fbT6VLsuaS0jO5k_ojbUEYzMEJE8qCIFBw&s"
          />
          <Story
            judul="Hiburan"
            gambar="https://cdn.rri.co.id/berita/Palangkaraya/o/1732968583711-Rekomendasi-Wisata-Semarang-untuk-Liburan-Keluarga-Traveloka-Xperience-6-1024x767-1/rkdpobyer51yd0j.webp"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
