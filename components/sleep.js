import { StyleSheet, Text, View } from "react-native"

const Sleep = () => {
    return (
        <>
            <View style={styles.container}>
                <Text> Sleep </Text>
            </View>
        </>
    )
}

export default Sleep

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})