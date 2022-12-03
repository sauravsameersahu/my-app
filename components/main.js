import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import background from "../assets/background.png";

const Main = ({ navigation }) => {

    const onPressFunction = () => {
        navigation.navigate("Tabs")
    }

    return (
        <ImageBackground source={background} style={styles.container}>

            <View style={{alignItems: 'center',flex:1}}>
                <View style={{
                    bottom: 100,
                    position: 'absolute',
                    marginHorizontal: 25
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 40,
                        lineHeight: 49,
                        width: 340,
                    }}>
                        Sleep Better
                        {"\n"}
                        Wake Happier
                    </Text>
                    <Text>
                        Have a relaxed and focused day.
                    </Text>
                </View>

                <Pressable style={{
                    height: 60,
                    borderRadius: 20,
                    width: 340,
                    backgroundColor: '#5099B5',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 10,
                    marginHorizontal: 25
                }} onPress={onPressFunction}>
                    <Text style={styles.textStyle}>Get Started</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Main
