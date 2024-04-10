import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";

const UserItem = ({ item }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name || '<No Name>'}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
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

export default UserItem
