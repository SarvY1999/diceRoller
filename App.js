import React, {useState} from "react"
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import DiceOne from './Assets/dice1.png'
import DiceTwo from './Assets/dice2.png'
import DiceThree from './Assets/dice3.png'
import DiceFour from './Assets/dice4.png'
import DiceFive from './Assets/dice5.png'
import DiceSix from './Assets/dice6.png'

const App = () => {

  const [url, seturl] = useState(DiceOne)
  const [url1, seturl1] = useState(DiceOne)
  const playButtonPressed = () => {

    let randomNumber = Math.floor(Math.random() * 6) + 1
    let randomNumber1 = Math.floor(Math.random() * 6) + 1
    
    switch (randomNumber){
      case 1:
        seturl1(DiceOne)
        break;

      case 2:
        seturl1(DiceTwo)
        break;

      case 3:
        seturl1(DiceThree)
        break;

      case 4:
        seturl1(DiceFour)
        break;

      case 5:
        seturl1(DiceFive)
        break;

      case 6:
        seturl1(DiceSix)
        break;
    }
    switch (randomNumber1){
      case 1:
        seturl(DiceOne)
        break;

      case 2:
        seturl(DiceTwo)
        break;

      case 3:
        seturl(DiceThree)
        break;

      case 4:
        seturl(DiceFour)
        break;

      case 5:
        seturl(DiceFive)
        break;

      case 6:
        seturl(DiceSix)
        break;
    }
  }

  return (
  <>
  <View style={styles.container}>
    <Image source={url} style={styles.image}></Image>
    <Image source={url1} style={styles.image}></Image>
    <TouchableOpacity onPress={playButtonPressed}>
      <Text style={styles.playButton}>Play Game</Text>
    </TouchableOpacity>
  </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#222841",
    alignItems : "center",
    justifyContent: "center",
  },

  image: {
    width:200,
    height:200, 
  },

  playButton:{
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 20,
    backgroundColor:"#30475E",
    paddingVertical: 10,
    borderColor: "#30975F",
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: "bold",
  },

})



export default App;


