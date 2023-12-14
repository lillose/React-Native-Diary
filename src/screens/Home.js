import React from 'react';
import { TouchableOpacity, Button, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #E0F2FF; 
`;

const ButtonContainer = styled.View`
    flexDirection: row;
    marginBottom: 10px;
`;



const BlueButton = styled(TouchableOpacity).attrs(() => ({
    color: 'darkblue',
}))`
    margin: 5px;
    width: 150px;
    height: 40px;
    borderRadius: 10px;
    background-color: darkblue;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

const Home = ({ navigation }) => {
    const goToTheListScreen = () => {
        navigation.navigate('Calendar');
    };

    const goToWritingScreen = () => {
        navigation.navigate('Storage');
    };

    return (
        <Container>
            <Image
                source={require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset11.png')}
                style={{ width: 300, height: 250, marginBottom: 0 }}
                resizeMode="contain"
            />
            <Image
                source={require('C:/Users/kevin/Desktop/KimSohyeon/react-native-diary/assets/Asset12.png')}
                style={{ width: 250, height: 100, marginBottom: 20}}
                resizeMode="contain"
            />
        <ButtonContainer>
            <BlueButton onPress={goToTheListScreen}>
                <ButtonText>작성하기</ButtonText>
            </BlueButton>

            <BlueButton onPress={goToWritingScreen}>
                <ButtonText>일기 모아보기</ButtonText>
            </BlueButton>
        </ButtonContainer>
        </Container>
    );
};

export default Home;