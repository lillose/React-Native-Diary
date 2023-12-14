import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

function StorageHeader() {
    const navigation = useNavigation();
    const onGoBack = () => {
        navigation.goBack();
    };

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.block}>
            <View style={styles.iconButtonWrapper}>
                <Pressable
                    style={styles.iconButton}
                    onPress={onGoBack}>
                    <Icon name={'arrow-back'} size={24} color={'#424242'} />
                </Pressable>
            </View>
            <View style={styles.iconButtonWrapper}>
                <Pressable
                    style={styles.iconButton}
                    onPress={navigateToHome}>
                    <Icon name={'home'} size={24} color={'#333f77'} />
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        height: 40,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 16,
    },
});

export default StorageHeader;
