import { View, Text } from "react-native";
import {FooterStyles} from './FooterStyle'

export default function Footer() {
    return (
        <View style={FooterStyles.footer}>
            <Text style={FooterStyles.footerText}> XPT0 Software - Todos os direitos reservados</Text>
        </View>
    );
}