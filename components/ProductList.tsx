import React, {useCallback} from "react";
import { useQuery, gql } from "@apollo/client";
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text } from "react-native";
import { Container, List } from "native-base";

import ProductListItem from "./ProductListItem";

const ProductList = () => {
    const {loading, error, data, refetch: _refetch} = useQuery(GET_PRODUCTS_QUERY);

    const refetch = useCallback(() => {
        setTimeout(() => _refetch(), 10);
    }, [_refetch]);

    if(loading) {
        return <ActivityIndicator size="large" />;
    }
    if(error) {
        console.log(error);
        return <Text>Error while fetching products.</Text>;
    }

    return (
        <SafeAreaView>
            <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={() => refetch()}/>}>
                <List>
                    {!loading && data && data.getProducts.map( (product:any) => (
                        <ProductListItem key={product.uuid} product={product} /> 
                    ))}
                </List>
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
            market {
                name
            }
        }
    }
`;

export default ProductList;