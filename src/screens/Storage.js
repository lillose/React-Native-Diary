import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import LogContext from "../contexts/LogContext";
import StorageList from "../components/StorageList";
import StorageHeader from "../components/StorageHeader";
import { SafeAreaView } from "react-native";

const Storage = () => {
    const {logs} = useContext(LogContext);
    return (
        <SafeAreaView style={styles.block}>
            <StorageHeader />
            <StorageList logs={logs} />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    block: {
        flex:1,
    },
});

export default Storage;