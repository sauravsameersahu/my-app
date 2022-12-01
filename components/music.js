import { StyleSheet, Text, View } from "react-native"

const Music = () => {
    return (
        <>
            <View style={styles.container}>
                <Text> Music </Text>
            </View>
        </>
    )
}

export default Music

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})