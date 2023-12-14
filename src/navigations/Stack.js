import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import Home from '../screens/Home';
import Emotion from '../screens/Emotion';
import Writing from '../screens/Writing';
import Storage from '../screens/Storage';
import CalendarScreen from '../screens/CalendarScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <Icon
                        name="arrow-back"
                        size={24} color={'#424242'}
                    />
                ),
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Emotion" component={Emotion} />
            <Stack.Screen name="Writing" component={Writing} options={{ headerShown: false }} />
            <Stack.Screen name="Storage" component={Storage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
