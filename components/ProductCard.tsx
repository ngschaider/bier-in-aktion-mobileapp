import React from "react";
import { Text, View, Image, SafeAreaView, ScrollView, RefreshControl, Alert, TextInput } from "react-native";
import { ListItem, Container, Card } from "native-base";
import { CONTENT_URI } from "@env";

const ProductCard = (props: any) => {
    const product = props.product;

    const marketImageUrl = CONTENT_URI + "/images/markets/" + product.market.type + ".png";

    return (
        <Card style={{marginLeft: 6, marginRight: 6, paddingTop: 10, paddingBottom: 10, paddingRight: 10}}>
            <View style={{flex: 3, flexDirection: "row", marginLeft: 0}}>
                <Image source={{uri: product.imageUrl}} style={{width: 90, height: 90}} />
                <View style={{flex: 2, flexDirection: "column"}}>
                    <View style={{flex: 2, flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{flex: 2, flexDirection: "column"}}>
                            <Text style={{fontSize: 16}}>
                                {product.brand}
                            </Text>
                            <Text>
                                {product.name}
                            </Text>
                        </View>
                        <View style={{flex: 2, flexDirection: "column", alignItems: "flex-end"}}>
                            <Text style={{fontSize: 16}}>
                                {product.salePrice.toFixed(2)} €
                            </Text>
                            <Text>
                                {product.salePrice != product.originalPrice && (
                                    <>
                                        <>statt </>
                                        <Text style={{textDecorationLine: "line-through"}}>
                                            {product.originalPrice.toFixed(2)} €
                                        </Text>
                                    </>
                                )}
                            </Text>    
                        </View>
                    </View>
                    <View style={{flex: 2, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end"}}>
                        <Text>
                            {product.additionalInfo}
                        </Text>
                        <Image source={{uri: marketImageUrl}} style={{width: 60, height: 24}} />
                    </View>
                </View>
            </View>
        </Card>
    );
}

export default ProductCard;