import React, {useCallback, useState} from "react";
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, Alert, View, InteractionManager } from "react-native";
import { Button, Container, List } from "native-base";
import { useQuery, gql, NetworkStatus } from "@apollo/client";

import ProductCard from "./ProductCard";

const ProductsPage = (props:any) => {    
    const [isRefresh, setIsRefresh] = useState(false);

    const {loading, error, data, refetch:_refetch, networkStatus} = useQuery(GET_PRODUCTS_QUERY, {
        notifyOnNetworkStatusChange: true,
    });

    const refetch = useCallback(() => {
        const task = InteractionManager.runAfterInteractions(async () => {
            if (_refetch) await _refetch()
        })
        return () => task.cancel()
    }, [_refetch]);

    const retry = () => {
        setIsRefresh(false);
        refetch();
    }

    const refresh = () => {
        setIsRefresh(true);
        refetch();
    }

    if(loading && !isRefresh) {
        console.log("loading");
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color='#aaa' />
            </View>
        );
    }

    if(error) {
        return (
            <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize: 18}}>
                    Fehler beim Abrufen der Aktionen
                </Text>   
                <Button onPress={retry} style={{padding: 10, alignSelf: "center", marginTop: 20}}>
                    <Text style={{color: "white"}}>
                        Erneut versuchen
                    </Text>
                </Button>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <ScrollView refreshControl={<RefreshControl refreshing={loading && isRefresh} onRefresh={refresh} />}>
                {data.getProducts.map((product:any) => (
                    <ProductCard key={product.uuid} product={product} /> 
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const GET_PRODUCTS_QUERY = gql`
    query {
        getProducts {
            uuid
            name
            brand
            imageUrl
            originalPrice
            salePrice
            additionalInfo
            market {
                name
                type
            }
        }
    }
`;

export default ProductsPage;