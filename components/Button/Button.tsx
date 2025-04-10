import { TouchableOpacity, Text } from "react-native";
import {ButtonStyles} from './ButtonStyle';

export default function Button() {
    return (
        <TouchableOpacity style={ButtonStyles.button}>
            <Text style={ButtonStyles.buttonText}>Acendeu</Text>
        </TouchableOpacity>
    );
}