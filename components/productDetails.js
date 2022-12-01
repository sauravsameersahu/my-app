import { ImageBackground, Text, View } from "react-native"

const ProductDetails = ({ route, navigation }) => {
    const { params } = route

    return (
        <>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                    {"\n"}
                    {params.name}
                    {"\n"}
                    {params.duration}
                    {"\n"}
                    {params.no_of_songs}
                </Text>
            </View>
        </>
    )
}

export default ProductDetails