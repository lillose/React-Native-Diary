import React, {useContext, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";  
import WriteHeader from "../components/WriteHeader";
import WriteEditor from "../components/WriteEditor";
import { useNavigation } from "@react-navigation/native";
import LogContext from "../contexts/LogContext";

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white',
    },
    avoidingView: {
        flex: 1,
        justifyContent: 'center',
    },
    selectedImagesContainer: {
        padding: 10,
      },
      selectedImagesText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
});

const Writing = ({route}) => {
    const log = route.params?.log;
    const selectedImageId = route.params?.selectedImageId;
    const [title, setTitle] = useState(log?.title ?? '');
    const [body, setBody] = useState(log?.body ?? '');
    const navigation = useNavigation();
    const [date, setDate] = useState(log ? new Date(log.date) : new Date());
    const [futuredate, setFutureDate] = useState(log ? new Date(log.date) : new Date());
    const {onCreate, onModify, onRemove} = useContext(LogContext);


    const onAskRemove = () => {
        Alert.alert(
            '삭제',
            '정말 삭제하시겠어요?',
            [{text: '취소', style: 'cancel'},
        {text: '삭제',
        onPress: () => {
            onRemove(log?.id);
            navigation.navigate('Home');
        },
        style: 'destructive',
    },
],
{cancelable: true},
        );
    };

    const onSave = () => {
        if (log) {
            onModify({
                id: log.id,
                date: date.toISOString(),
                futuredate: futuredate.toISOString(),
                title,
                body,
                selectedImageId: selectedImageId,
            });
        } else {
        onCreate({
            title,
            body,
            date: date.toISOString(),
            futuredate: futuredate.toISOString(),
            selectedImageId: selectedImageId,
        });
    }
    navigation.navigate('Storage');
    };


    return (
        <SafeAreaView style={styles.block}>
            <KeyboardAvoidingView
                style={styles.avoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <WriteHeader
                    onSave={onSave}
                    onAskRemove={onAskRemove}
                    isEditing={!!log}
                    date={date}
                    onChangeDate={setDate}
                    futuredate={futuredate}
                    onChangeFutureDate={setFutureDate}
                />
                <WriteEditor
                    title={title}
                    body={body}
                    onChangeTitle={setTitle}
                    onChangeBody={setBody}
                    selectedImageId={selectedImageId}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Writing;