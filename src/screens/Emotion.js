import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

const Emotion = ({ navigation }) => {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const [images, setImages] = useState([
    { id: 1, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset18.png'), selected: false },
    { id: 2, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset19.png'), selected: false },
    { id: 3, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset20.png'), selected: false },
    { id: 4, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset21.png'), selected: false },
    { id: 5, source: require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset22.png'), selected: false },
  ]);

  const toggleImageSelection = (imageId) => {
    setSelectedImageId(imageId);
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId ? { ...image, selected: !image.selected } : image
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>오늘의 감정을 고르세요.</Text>
      <View style={styles.imagesContainer}>
        {images.map((image) => (
          <TouchableOpacity
            key={image.id}
            onPress={() => toggleImageSelection(image.id)}
            style={styles.imageContainer}
          >
            <Image source={image.source} style={styles.image} />
            <View style={styles.checkbox}>
              {selectedImageId === image.id && (
                <View style={styles.checkboxInner} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Writing', { selectedImageId })}
            >
              <Text style={styles.buttonText}>감정선택</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    margin: 10,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  checkbox: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: 'black',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333f77',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Emotion;
