import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import DetailsList from "../components/DetailsList";

const DetailsScreen = () => {
    const route = useRoute();
    const user = route.params.user;

    return (
        <View style={styles.flex1}>
            <View style={styles.detailsCard}>
                <Text style={styles.text}>Name: {user.name || '<No Name>'}</Text>
            </View>
            <View style={styles.sectionHeader}>
                <Text style={styles.text}>Interest:</Text>
            </View>
            {user.interest.length !== 0 ? (
                <DetailsList items={user.interest} />
            ) : (
                <View style={styles.noInterestContainer}>
                    <Text style={styles.text}> No Interests!</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    detailsCard: {
        padding: 16,
        backgroundColor: "#f9c2ff",
        margin: 16,
    },
    text: {
        fontSize: 26,
    },
    sectionHeader: {
        margin: 16,
    },
    noInterestContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default DetailsScreen;
