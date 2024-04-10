import React from "react";
import { View, FlatList, StyleSheet, StatusBar, Text } from "react-native";

const Item = ({ text }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{text}</Text>
    </View>
);

const DetailsList = ({ items }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) => <Item text={item} />}
                keyExtractor={(item, index) => `${item}-${index}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default DetailsList;
