import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, Text } from "react-native"
import Home from './home';
import Music from './music';
import Profile from './profile';
import Sleep from './sleep';
import home from "../assets/home.png"
import sleep from "../assets/bedtime.png"
import person from "../assets/person.png"
import play_circle from "../assets/play_circle.png"
import add_circle from "../assets/add_circle.png"

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarItemStyle: styles.bottomNav
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconStyles}>
                            <Image
                                source={home}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#5099B5" : "#748C94"
                                }}
                            />
                        </View>
                    )
                }} />
                <Tab.Screen name="Sleep" component={Sleep} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconStyles}>
                            <Image
                                source={sleep}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#5099B5" : "#748C94"
                                }}
                            />
                        </View>
                    )
                }} />
                <Tab.Screen name="Add" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconStyles}>
                            <Image
                                source={add_circle}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#5099B5" : "#748C94"
                                }}
                            />
                        </View>
                    )
                }} />
                <Tab.Screen name="Music" component={Music} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconStyles}>
                            <Image
                                source={play_circle}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#5099B5" : "#748C94"
                                }}
                            />
                        </View>
                    )
                }} />
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconStyles}>
                            <Image
                                source={person}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#5099B5" : "#748C94"
                                }}
                            />
                        </View>
                    )
                }} />
            </Tab.Navigator>
        </>
    )
}

export default Tabs

const styles = StyleSheet.create({
    bottomNav: {
        backgroundColor: "#FFFFFF",
    },
    iconStyles: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
    }
})