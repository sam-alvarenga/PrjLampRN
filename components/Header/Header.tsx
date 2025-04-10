import { View, Text, StyleSheet } from "react-native";
import {headerStyles} from  './HeaderStyle';

export default function Header() {
    return (
        <View style={headerStyles.headerContainer}>
            <Text style={headerStyles.textTurn}>Turn On/Off</Text>
        </View>
    )

}

