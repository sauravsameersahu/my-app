import { Image, StyleSheet, Text, View, TextInput, Pressable, FlatList, ImageBackground, ScrollView } from "react-native"
import { useState } from "react"
import hamburger from "../assets/hamburger.png"
import search from "../assets/search.png"
import go from "../assets/go.png"
import sleep from "../assets/emoji_sleep.png"
import focus from "../assets/emoji_focus.png"
import relax from "../assets/emoji_relax.png"
import feelgood from "../assets/emoji_feelgood.png"
import sleep_bg from "../assets/sleep_bg.png"
import focus_bg from "../assets/focus_bg.png"
import relax_bg from "../assets/relax_bg.png"
import feelgood_bg from "../assets/feelgood_bg.png"
import explore_moods from "../assets/explore_moods.png"
const Home = ({ navigation }) => {

    const hamburgerMenuPressed = () => {
        console.log("Hamburger Pressed")
    }

    const exploreMoodsPress = () => {
        navigation.navigate("Explore Moods")
    }

    const [category] = useState([
        { moodText: "Sleep", key: 1/*, backgroundColor: "#FEC38A"*/, moodKey: sleep, fontColor: "#FFC389", background: sleep_bg },
        { moodText: "Focus", key: 2/*, backgroundColor: "#5099B4"*/, moodKey: focus, fontColor: "#5099B5", background: focus_bg },
        { moodText: "Relax", key: 3/*, backgroundColor: "#EFF4FF"*/, moodKey: relax, fontColor: "#82A8FD", background: relax_bg },
        { moodText: "Feel Good", key: 4/*, backgroundColor: "#F5B0AC"*/, moodKey: feelgood, fontColor: "#F5B1AD", background: feelgood_bg },
    ])
    return (
        <>
            <View style={styles.container}>
                <View style={styles.topWrapper}>

                    <ScrollView>

                        <View style={styles.row_space_between}>
                            <Text style={styles.greetingsText}>
                                Good Morning, Johnny Bravo
                            </Text>
                            <Pressable onPress={hamburgerMenuPressed}>
                                <Image source={hamburger}
                                    resizeMode='contain' />
                            </Pressable>
                        </View>

                        <View style={styles.inputWrapper}>
                            <Image
                                source={search}
                                style={styles.searchIcon}
                            />
                            <TextInput
                                style={{ flex: 1 }}
                                placeholder="Search Sound or Video"
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View style={styles.row_space_between}>
                            <Text style={styles.subHeadingText}>Select Category</Text>
                            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                                <Text style={styles.linkText}>See all</Text>
                                <Image
                                    source={go}
                                    style={styles.nextIcon}
                                />
                            </View>
                        </View>

                        <FlatList
                            data={category}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <ImageBackground source={item.background} style={styles.categoryPills}>
                                    <Image
                                        source={item.moodKey}
                                        style={styles.moodIcons}
                                    />
                                    <Text style={{ fontSize: 18, color: item.fontColor, fontWeight: "bold" }}>{item.moodText}</Text>
                                </ImageBackground>
                            )}
                        />

                        <Pressable onPress={exploreMoodsPress}>
                            <View style={styles.exploreMoodsPill}>
                                <Text style={{ fontSize: 18, fontSize: 30, lineHeight: 34, fontWeight: "bold" }}>
                                    Explore
                                    {"\n"}
                                    Moods
                                </Text>
                                <Image
                                    source={explore_moods}
                                />
                            </View>
                        </Pressable>

                    </ScrollView>

                </View>
            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    topWrapper: {
        marginTop: 30
    },
    greetingsText: {
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 30,
        width: 200,
    },
    subHeadingText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    linkText: {
        fontSize: 14,
        color: "#5099B5"
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderRadius: 30,
        backgroundColor: "#F3F3F3",
        marginHorizontal: 25,
        marginVertical: 10
    },
    searchIcon: {
        padding: 10,
        margin: 5,
        height: 15,
        width: 15,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    nextIcon: {
        padding: 10,
        height: 15,
        width: 15,
    },
    moodIcons: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    row_space_between: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 25,
        marginVertical: 10
    },
    categoryPills: {
        marginHorizontal: 20,
        marginVertical: 10,
        height: 90,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    exploreMoodsPill: {
        backgroundColor: "#EFF4FF",
        height: 150,
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 30,
        justifyContent: "space-between",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})