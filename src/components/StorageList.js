import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import StorageListItem from "./StorageListItem";

function StorageList({logs}) {
    const keyExtractor = (log) => log.id;
    return (
        <FlatList
          data={logs}
          style={styles.block}
          renderItem={({item}) => <StorageListItem log={item} />}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      );
    }


const styles = StyleSheet.create({
    // block: {flex: 1},
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
        width: '100%',
    },
});

export default StorageList;