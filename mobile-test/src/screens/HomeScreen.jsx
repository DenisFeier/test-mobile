import React from "react";
import { View, Text, StyleSheet } from "react-native";

import useFetchUsers from '../hooks/useFetchUsers'
import UsersList from "../components/UsersList";

const HomeScreen = () => {
    const { data, isLoading, isError, error } = useFetchUsers()

    if (isError) {
        <View style={styles.containerLoading}>
            <Text>We have and error!</Text>
            <Text>{error.message}</Text>
        </View>
    }

    if (isLoading) {
        <View style={styles.containerLoading}>
            <Text>Loading...</Text>
        </View>
    }

    return (
        <UsersList users={data} />
    )
}

const styles = StyleSheet.create({
    containerLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default HomeScreen
