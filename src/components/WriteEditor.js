import React from "react";
import {View, StyleSheet, TextInput, Image} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody, selectedImageId}) {
    const images = [
        { id: 1, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset18.png'), selected: false },
        { id: 2, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset19.png'), selected: false },
        { id: 3, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset20.png'), selected: false },
        { id: 4, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset21.png'), selected: false },
        { id: 5, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset22.png'), selected: false },
      ];

    const selectedImage = images.find((image) => image.id === selectedImageId);
      

    return(
        <View style={styles.block}>
            <View style={styles.image}>
                {selectedImage && (
          <Image
            source={selectedImage.source}
            style={{ width: 100, height: 100 }}
          />
        )}
        </View>
            <TextInput
            placeholder={'제목을 입력하세요'}
            style={styles.titleInput}
            returnKeyType={'next'}
            onChangeText={onChangeTitle}
            value={title}/>
            <TextInput
            placeholder={'당신의 오늘을 기록해보세요'}
            style={styles.bodyInput}
            multiline
            textAlignVertical="top"
            onChangeText={onChangeBody}
            value={body}/>
        </View>   
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        padding: 16,
    },
    titleInput: {
        paddingVertical: 0,
        fontSize: 18,
        marginBottom: 16,
        color: '#263238',
        fontWeight: 'bold',
    },
    bodyInput:{
        flex: 1,
        fontSize: 16,
        paddingVertical: 0,
        color: '#263238',
    },
    image:{
        padding: 10,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
});

export default WriteEditor;