import { useEffect, useState } from "react"
import { ImageBackground, Text, View, StyleSheet, FlatList, Pressable } from "react-native"
import night_crecent from "../assets/night_crecent.png"
import night_grave from "../assets/night_grave.png"
import night_hut from "../assets/night_hut.png"
import night_lake from "../assets/night_lake.png"
import night_road from "../assets/night_road.png"
import night_sea from "../assets/night_sea.png"

const ProductDetails = ({ route, navigation }) => {
    const { params } = route
    const [background, setBackground] = useState("")
    const [songs] = useState([
        { name: "Sleep Cool Relax", duration: "3:30", background: night_hut },
        { name: "Mix For Kids", duration: "3:30", background: night_crecent },
        { name: "Night Mix", duration: "3:30", background: night_lake },
        { name: "For Reading Before Sleep", duration: "3:30", background: night_sea },
        { name: "Reading Cool Relax", duration: "3:30", background: night_grave },
    ])
    useEffect(() => {
        switch (params.backgroundName) {
            case "night_hut":
                setBackground(night_hut)
                break;
            case "night_crecent":
                setBackground(night_crecent)
                break;
            case "night_lake":
                setBackground(night_lake)
                break;
            case "night_sea":
                setBackground(night_sea)
                break;
            case "night_grave":
                setBackground(night_grave)
                break;
            case "night_road":
                setBackground(night_road)
                break;
            default:
        }
    }, [])

    return (
        <>

            < ImageBackground
                source={background}
                style={styles.topImage}
            >
                <View style={styles.imageTextContainer}>
                    <Text style={styles.playlistText}>
                        {params.name}
                    </Text>
                    <View>
                        <Text style={styles.detailsText}>
                            {params.duration} , {params.no_of_songs} Songs
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.bottomContainer}>
                <FlatList
                    data={songs}
                    renderItem={({ item }) => (
                        <Pressable >
                            <View style={styles.songContainer}>

                                < ImageBackground
                                    source={item.background}
                                    style={styles.albumCover}
                                    imageStyle={{ borderRadius: 10 }}
                                />

                                <View style={styles.songDetails}>
                                    <Text style={styles.durationText}>{item.duration}</Text>
                                    <Text style={styles.nameText}>{item.name}</Text>
                                </View>

                                <View style={styles.options}>
                                    <Text>...</Text>
                                </View>

                            </View>
                        </Pressable>
                    )}
                />
            </View>
        </>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    playlistText: {
        color: "#FFFFFF",
        fontSize: 30,
    },
    detailsText: {
        color: "#FFFFFF",
    },
    topImage: {
        flex: 1,
        justifyContent: "flex-end"
    },
    imageTextContainer: {
        marginLeft: 30,
        marginBottom: 20
    },
    bottomContainer: {
        flex: 2,
        backgroundColor: "#F5F5F5"
    },
    songContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#F3F3F3",
        borderBottomWidth: 4
    },
    albumCover: {
        flex: 1,
        width: "100%",
        aspectRatio: 1 / 1,
        marginHorizontal: 10
    },
    songDetails: {
        flex: 3,
        marginHorizontal: 10,
        justifyContent: "space-between",
        flexDirection: "column"
    },
    durationText: {
        size: 14,
        lineHeight: 33.64,
        color: "#2C2B49",
        fontWeight: "400"
    },
    nameText: {
        size: 16,
        lineHeight: 33.64,
        color: "#2C2B49",
        fontWeight: "600"
    },
    options: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})