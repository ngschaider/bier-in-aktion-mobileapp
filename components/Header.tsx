import React from "react";
//import { Container, Header as NativeHeader, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert, TouchableHighlight } from "react-native";
import { Header as NativeHeader } from "react-native-elements";

const Header = () => {
    const onPress = () => {
        Alert.alert("hi", "hi");
    }

    return (
        <NativeHeader
            leftComponent={<Icon.Button name="bars" onPress={onPress} style={{borderRadius: 50}} />}
            centerComponent={{ text: "Bier in Aktion", style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
    );
}

export default Header;