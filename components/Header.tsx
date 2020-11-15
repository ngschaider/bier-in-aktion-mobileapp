import React from "react";
import { Container, Header as NativeHeader, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <NativeHeader>
            <Left>
                <Icon.Button name="bars" backgroundColor="transparent" />
            </Left>
            <Body>
                <Title>Header</Title>
            </Body>
            <Right>
                <Icon.Button name="cog" backgroundColor="transparent" />
            </Right>
        </NativeHeader>
    );
}

export default Header;