import { View, Image  } from "react-native";
import {Lampstyles} from  './LampStyle';

export default function Lamp() {
    return (
        <View style={Lampstyles.ImgLamp}>
            <Image
                source={require('./../../assets/image/lampOn.jpg')}
            />
        </View>
    );
}