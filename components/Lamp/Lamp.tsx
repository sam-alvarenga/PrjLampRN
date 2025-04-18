import { View, Image, TouchableOpacity, Text } from "react-native";
import { Lampstyles } from './LampStyle';
import React, { useState } from "react";
import lampOn from '../../assets/image/lampOn.jpg'
import lampOff from '../../assets/image/lampOff.jpg'

export default function Lamp() {

    //paramentro, setter (função que troca o valor do paramêtro)
    const [ligada, setLigada] = useState(true); //HOOK

    /* let turnOn = true; */
    function TurnOnOff() {

        /* turnOn = !turnOn; */
        /*   if (ligada == true) {
              setLigada(false);
  
          } else {
              setLigada (true);
          } */

        setLigada(!ligada);
        console.log(ligada);
    }

    return (
        <View style={Lampstyles.ImgLamp}>
            <TouchableOpacity onPress={TurnOnOff}>
                <Image
                    source={ligada ? lampOn : lampOff}
                />
            </TouchableOpacity>

            <View style={Lampstyles.TextContainer}>
                <Text style={Lampstyles.TextStatus}>Ligado</Text>

            </View>

        </View >
    );
}