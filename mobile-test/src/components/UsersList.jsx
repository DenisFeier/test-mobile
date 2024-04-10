import React from "react";
import {
    View,
    FlatList,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import UserItem from "./UserItem";

const RenderItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => { navigation.push('Details', { user: item }) }}>
            <UserItem item={item} />
        </TouchableOpacity>
    );
};

const UsersList = ({ users }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default UsersList;
