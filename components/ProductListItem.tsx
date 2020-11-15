import React from "react";
import { Text, View, Image, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { ListItem, Container } from "native-base";

const ProductListItem = (args: any) => {
    const product = args.product;

    return (
        <ListItem>
            <View style={{flex: 2, flexDirection: "row"}}>
                <Image source={{uri: product.imageUrl}} style={{width: 100, height: 100}} />
                <View style={{flex: 2, flexDirection: "column"}}>
                    <Text style={{paddingLeft: 10, fontSize: 16}}>
                        {product.brand}
                    </Text>
                    <Text style={{paddingLeft: 10}}>
                        {product.name}
                    </Text>
                </View>
            </View>
        </ListItem>
    );
}

export default ProductListItem;