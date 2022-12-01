import { useState } from "react"
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"
import night_crecent from "../assets/night_crecent.png"
import night_grave from "../assets/night_grave.png"
import night_hut from "../assets/night_hut.png"
import night_lake from "../assets/night_lake.png"
import night_road from "../assets/night_road.png"
import night_sea from "../assets/night_sea.png"
import play from "../assets/play.png"

const ExploreMoods = ({ navigation }) => {

    const [playlist] = useState([
        { name: "Camping Relax", key: 1, duration: "3:10:55", background: night_hut, backgroundUri: "../assets/night_hut.png", no_of_songs: 20 },
        { name: "Samping Relax", key: 2, duration: "2:30:45", background: night_crecent, backgroundUri: "../assets/night_crecent.png", no_of_songs: 20 },
        { name: "Night Mix Relax", key: 3, duration: "1:20:25", background: night_lake, backgroundUri: "../assets/night_lake.png", no_of_songs: 20 },
        { name: "Sleep Cool Relax", key: 4, duration: "3:10:55", background: night_sea, backgroundUri: "../assets/night_sea.png", no_of_songs: 20 },
        { name: "Horror Mix", key: 5, duration: "2:30:45", background: night_grave, backgroundUri: "../assets/night_grave.png", no_of_songs: 20 },
        { name: "Lonely Nights Mix", key: 6, duration: "1:20:25", background: night_road, backgroundUri: "../assets/night_road.png", no_of_songs: 20 }
    ])

    const onMoodPress = (e, item) => {
        navigation.navigate("Product Details", item)
    }

    return (
        <>

            <FlatList
                data={playlist}
                renderItem={({ item }) => (
                    <Pressable onPress={(e) => onMoodPress(e, item)}>
                        < ImageBackground
                            source={item.background}
                            style={styles.categoryPills}
                            imageStyle={{ borderRadius: 50 }}>
                            <View style={{ marginLeft: 30 }}>
                                <Text style={{
                                    color: "#FFFFFF",
                                    fontSize: 30,
                                    lineHeight: 34,
                                    width: 160,
                                }}>
                                    {item.name}
                                </Text>
                                <View style={{
                                    backgroundColor: "white",
                                    width: 80,
                                    height: 30,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 15
                                }}>
                                    <Text>
                                        {item.duration} <Image source={play} />
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </Pressable>
                )}
            />
        </>
    )
}

export default ExploreMoods

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryPills: {
        height: 185,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: "center",
        flexDirection: "column"
        // alignItems: "center",
    }
})