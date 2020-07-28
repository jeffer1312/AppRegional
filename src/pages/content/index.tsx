import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

//Audio.setAudioModeAsync({ staysActiveInBackground: true });

const Content = () => {
  const navigation = useNavigation();
  function handleNavigateToSocials() {
    navigation.navigate("Socials");
    
  }
  const StreamAudio = new Audio.Sound();

  // async function load() {

  // }
  // load();
  const hours = new Date().getHours(); //To get the Current Hours
  const min = new Date().getMinutes(); //To get the Current Minutes
  const sec = new Date().getSeconds();

  const Hora = `${hours}:${min}:${sec}`;
  console.log(Hora);

  function programacao() {
    if (Hora >= "00:00:00" && Hora <= "04:59:59") {
      return "Automatico";
    } else if (Hora >= "05:00:00" && Hora <= "07:59:59") {
      return "Acorda Meu Povo com Valdir Felizardo";
    } else if (Hora >= "08:00:00" && Hora <= "11:59:59") {
      return "Show da Manhã com Claudinha Silva";
    } else if (Hora >= "12:00:00" && Hora <= "12:59:59") {
      return "Jornal Regional com Washington Luis	";
    } else if (Hora >= "13:00:00" && Hora <= "15:59:59") {
      return "Sertanejo Universitario com Alice Moraes	";
    } else if (Hora >= "16:00:00" && Hora <= "18:59:59") {
      return "Prog. Bruno Martins com Bruno Martins	";
    } else if (Hora >= "19:00:00" && Hora <= "20:59:59") {
      return "Boa Noite Cidade com William Neto	";
    } else if (Hora >= "21:00:00" && Hora <= "21:59:59") {
      return "Voz do Brasil com A Voz do Brasil";
    } else if (Hora >= "22:00:00" && Hora <= "23:59:59") {
      return "Automatico com Automatico";
    }
  }

  async function handlePlay() {
    try {
      await StreamAudio.loadAsync({
        uri: "http://191.37.227.127:5000/stream.aac",
        overrideFileExtensionAndroid: "aac",
      });
    } catch (error) {
      // An error occurred!
    }
    await StreamAudio.playAsync();
    StreamAudio.setIsMutedAsync(false);

    // Your sound is playing!
  }
  async function handlePause() {
    await StreamAudio.setIsMutedAsync(true);

    // Your sound is playing!
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon style={styles.menu} name="menu" color="#fff" size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>Radio Regional Fm 88.5</Text>
        <TouchableOpacity>
          <Icon style={styles.share} name="share-2" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Image
          resizeMethod="auto"
          style={styles.image}
          source={require("./src/assets/background.jpg")}
        />
      </View>
      <View style={styles.controls}>
        <Text style={styles.programacao}>{programacao()}</Text>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button} onPress={handlePlay}>
            <Text style={styles.buttonText}>
              <Icon name="play" color="#fff" size={24} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePause}>
            <Text style={styles.buttonText}>
              <Icon name="pause" color="#fff" size={24} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    top: 5,
    left: 50,
  },
  share: {
    right: -250,
  },
  menu: {
    left: 10,
  },
  controls: {
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    top: -220,
    height: 300,
  },
  header: {
    backgroundColor: "#9244a9",
    flexDirection: "row",
    paddingTop: 60,
    height: 120,
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  programacao: {
    textAlign: "center",
    margin: 20,
    color: "#fff",
  },
  button: {
    backgroundColor: "#793582",
    height: 60,
    width: 60,
    flexDirection: "row",
    borderRadius: 30,
    overflow: "hidden",
    alignItems: "center",
    margin: 8,
  },

  icon: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",

    fontSize: 16,
  },
});

export default Content;
