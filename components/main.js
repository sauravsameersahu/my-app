import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import background from "../assets/background.png";

const Main = ({ navigation }) => {

    const onPressFunction = () => {
        navigation.navigate("Tabs")
    }

    return (
        <ImageBackground source={background} style={styles.container}>

            <View style={styles.textContainer}>

                <Text style={styles.titleText}>
                    Sleep Better
                    {"\n"}
                    Wake Happier
                    {"\n"}
                </Text>

                <Text style={styles.subTitleText}>
                    Have a relaxed and focused day.
                </Text>

                <Pressable style={styles.button} onPress={onPressFunction}>
                    <Text style={styles.text}>Get Started</Text>
                </Pressable>

            </View>


        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 340,
        height: 60,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#5099B5',
        position: 'absolute',
        bottom: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#FFFFFF',
    },
    titleText: {
        fontWeight: "bold",
        position: 'absolute',
        bottom: 100,
        fontSize: 40,
        lineHeight: 49,
        width: 340,
    },
    subTitleText: {
        position: 'absolute',
        bottom: 120,
        fontSize: 16,
        width: 340,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    }
});

export default Main
